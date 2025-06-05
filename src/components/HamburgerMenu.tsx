
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Moon, Sun, Clock, LogOut } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { ColorSchemeDialog } from '@/components/ColorSchemeDialog';

export const HamburgerMenu = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { toast } = useToast();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Erfolgreich abgemeldet",
      description: "Sie wurden sicher abgemeldet.",
    });
    navigate('/login');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="p-2">
          <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 dark:bg-gray-800 dark:border-gray-700">
        <SheetHeader>
          <SheetTitle className="text-left dark:text-gray-200">Menü</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <div 
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              {isDarkMode ? <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" /> : <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />}
              <span className="text-gray-700 dark:text-gray-200 font-medium">Dark Mode</span>
            </div>
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleDarkMode}
            />
          </div>

          <ColorSchemeDialog />
          
          <div 
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            onClick={() => console.log('Historie')}
          >
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-200 font-medium">Historie</span>
            </div>
          </div>

          <div 
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            onClick={handleLogout}
          >
            <div className="flex items-center space-x-3">
              <LogOut className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-200 font-medium">Ausloggen</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
