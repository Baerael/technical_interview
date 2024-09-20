import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ThemeContextProvider from "../src/app/contexts/themeContext";
import Page from "../src/app/page";


describe("Page", () => {
  it('heading has text hello world', () => {
    render(<ThemeContextProvider><Page /></ThemeContextProvider>);
    expect(screen.getByText(/hello world/)).toBeDefined()
  })
  it('<h1> exists', () => {
    render(<ThemeContextProvider><Page /></ThemeContextProvider>);
    expect(screen.getByRole('heading', { level: 1, name: 'hello world' })).toBeDefined()
  })
});
