"use client";
import { Theme } from "@radix-ui/themes";
import Map from "./map";
import { useThemeContext } from "./contexts/themeContext";

export default function Home() {
  const { theme, setTheme } = useThemeContext();
  return (
    <Theme appearance={theme === 'plum' ? 'dark' : 'light'} accentColor={theme}>
      <h1>hello world</h1>
      <Map />
    </Theme>
  );
}
