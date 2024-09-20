"use client";
import { Theme } from "@radix-ui/themes";
import Map from "./map";
import { useThemeContext } from "./contexts/themeContext";

export default function Home() {
  const { theme, setTheme } = useThemeContext();
  <h1>hello world</h1>
  return (
    <Theme accentColor={theme}>
      <Map />
    </Theme>
  );
}
