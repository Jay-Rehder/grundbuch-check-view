
import { useState } from 'react';
import { Menu, X, LogOut, Settings, BarChart3, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigate, Link } from 'react-router-dom';

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
          <Link
            to="/dashboard"
            className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <BarChart3 className="h-4 w-4 mr-3" />
            Dashboard
          </Link>
          
          <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex items-center">
              {theme === 'dark' ? <Moon className="h-4 w-4 mr-3" /> : <Sun className="h-4 w-4 mr-3" />}
              Dark Mode
            </div>
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
            />
          </div>
          
          <hr className="my-2 border-gray-200 dark:border-gray-600" />
          
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <LogOut className="h-4 w-4 mr-3" />
            Ausloggen
          </button>
        </div>
      )}
    </div>
  );
};
