
import React, { createContext, useContext, useState, useEffect } from 'react';

type ColorScheme = {
  name: string;
  color: string;
};

const colorSchemes: ColorScheme[] = [
  { name: 'Pastellblau', color: '#F1F7FE' },
  { name: 'Pastellpfirsich', color: '#FEF7F4' },
  { name: 'Flieder', color: '#C8B7FE' },
  { name: 'Graublau', color: '#89A0BC' },
  { name: 'Braun', color: '#98817A' },
  { name: 'Lila', color: '#7C6EA9' },
];

type ColorSchemeContextType = {
  currentScheme: ColorScheme;
  colorSchemes: ColorScheme[];
  setColorScheme: (scheme: ColorScheme) => void;
};

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(undefined);

export const ColorSchemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>(() => {
    const saved = localStorage.getItem('colorScheme');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return colorSchemes[0];
      }
    }
    return colorSchemes[0];
  });

  useEffect(() => {
    localStorage.setItem('colorScheme', JSON.stringify(currentScheme));
  }, [currentScheme]);

  const setColorScheme = (scheme: ColorScheme) => {
    setCurrentScheme(scheme);
  };

  return (
    <ColorSchemeContext.Provider value={{ currentScheme, colorSchemes, setColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useColorScheme = () => {
  const context = useContext(ColorSchemeContext);
  if (context === undefined) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider');
  }
  return context;
};
