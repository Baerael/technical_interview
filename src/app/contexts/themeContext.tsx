"use client";
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type AccentColor = "indigo" | "plum";

interface ThemeContextType {
  theme: AccentColor; // Changed from 'string' to 'AccentColor'
  setTheme: Dispatch<SetStateAction<AccentColor>>; // This now matches the useState setter type
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<AccentColor>("indigo");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("context is not defined");
  }

  return context;
}
