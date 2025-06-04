
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        toast({
          title: "Erfolgreich angemeldet",
          description: "Willkommen zurück!",
        });
        navigate('/');
      } else {
        toast({
          title: "Anmeldung fehlgeschlagen",
          description: "Bitte überprüfen Sie Ihre Eingaben.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Ein unerwarteter Fehler ist aufgetreten.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors flex items-center justify-center p-6" style={{ backgroundColor: '#F1F7FE' }}>
      <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg border-gray-200 dark:border-gray-700">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-blue-200 dark:bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-300 font-bold text-sm">📄</span>
            </div>
            <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">DORA KI</span>
            <div className="flex space-x-1">
              <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 text-xs rounded">OCR</span>
              <span className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 text-xs rounded">KI</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-medium text-gray-800 dark:text-white">Anmelden</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">E-Mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ihre@email.de"
                required
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Passwort</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mindestens 6 Zeichen"
                  required
                  minLength={6}
                  className="pr-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? 'Anmelden...' : 'Anmelden'}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Demo: Verwenden Sie eine beliebige E-Mail und ein Passwort mit mindestens 6 Zeichen
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
