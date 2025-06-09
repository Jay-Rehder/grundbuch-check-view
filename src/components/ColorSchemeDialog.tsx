
import { useState } from 'react';
import { Palette } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useColorScheme } from '@/contexts/ColorSchemeContext';

export const ColorSchemeDialog = () => {
  const [open, setOpen] = useState(false);
  const { currentScheme, colorSchemes, setColorScheme } = useColorScheme();

  const handleSchemeSelect = (scheme: any) => {
    setColorScheme(scheme);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer w-full">
          <div className="flex items-center space-x-3">
            <Palette className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <span className="text-gray-700 dark:text-gray-200 font-medium">Schema ändern</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="dark:text-gray-200">Farbschema auswählen</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {colorSchemes.map((scheme) => (
            <Button
              key={scheme.name}
              variant={currentScheme.name === scheme.name ? "default" : "outline"}
              onClick={() => handleSchemeSelect(scheme)}
              className="flex flex-col items-center gap-2 h-auto p-4"
            >
              <div 
                className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600"
                style={{ backgroundColor: scheme.color }}
              />
              <span className="text-sm">{scheme.name}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
