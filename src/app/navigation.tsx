"use client";
import { Flex, Box, Button, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useThemeContext } from "./contexts/themeContext";

export default function Navigation() {
  const { theme, setTheme } = useThemeContext();

  return (
    <Flex style={{ position: "absolute", top: "10px", left: "100px" }} gap="4">
      <Box maxWidth="200px">
        <TextField.Root placeholder="Search the docs…" size="2">
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </Box>
      <Button>Boulders</Button>
      <Button>Sport</Button>
      <Button>Trad</Button>

      <Button onClick={() => setTheme("plum")}>Plum theme</Button>
      <Button onClick={() => setTheme("indigo")}>Indigo theme</Button>
    </Flex>
  );
}
