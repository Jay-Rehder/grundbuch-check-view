
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Moon, Sun, Settings, Clock, LogOut } from 'lucide-react';
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

  const menuItems = [
    {
      icon: isDarkMode ? Sun : Moon,
      label: 'Dark Mode',
      action: toggleDarkMode,
      hasSwitch: true,
      switchValue: isDarkMode
    },
    {
      icon: Settings,
      label: 'Schema ändern',
      action: () => console.log('Schema ändern'),
      hasSwitch: false
    },
    {
      icon: Clock,
      label: 'Historie',
      action: () => console.log('Historie'),
      hasSwitch: false
    },
    {
      icon: LogOut,
      label: 'Ausloggen',
      action: handleLogout,
      hasSwitch: false
    }
  ];

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
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              onClick={!item.hasSwitch ? item.action : undefined}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <span className="text-gray-700 dark:text-gray-200 font-medium">{item.label}</span>
              </div>
              {item.hasSwitch && (
                <Switch
                  checked={item.switchValue}
                  onCheckedChange={item.action}
                />
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
