"use client";
import { Theme, Button } from "@radix-ui/themes";
import Map from "./map";
import { useThemeContext } from "./contexts/themeContext";

export default function Home() {
  const { theme, setTheme } = useThemeContext();
  return (
    <Theme accentColor={theme}>
      <h1>hello world</h1>
      <Map />
    </Theme>
  );
}
