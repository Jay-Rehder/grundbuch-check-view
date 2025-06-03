
import { useState } from 'react';
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

export const HamburgerMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = [
    {
      icon: isDarkMode ? Sun : Moon,
      label: 'Dark Mode',
      action: () => setIsDarkMode(!isDarkMode),
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
      action: () => console.log('Ausloggen'),
      hasSwitch: false
    }
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="p-2">
          <Menu className="h-6 w-6 text-gray-600" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle className="text-left">Menü</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={!item.hasSwitch ? item.action : undefined}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700 font-medium">{item.label}</span>
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
