"use client";
import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

type AccentColor = "indigo" | "plum";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }) {
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
