"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <div>
      <ThemeProvider defaultTheme="system" attribute="class">
        <div className="transition-colors duration-300">{children}</div>
      </ThemeProvider>
    </div>
  );
}
