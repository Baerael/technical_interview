"use client";
import { Theme, Flex, Section } from "@radix-ui/themes";
import Map from "./map";
import { createContext, useContext, useState } from "react";
import { useThemeContext } from "./contexts/themeContext";

type AccentColor = "indigo" | "plum";

export default function Home() {
  const { theme, setTheme } = useThemeContext();
  <h1>hello world</h1>
  return (
    <Theme accentColor={theme}>
      <Map />
    </Theme>
  );
}
