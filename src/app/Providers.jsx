"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <div>
      <ThemeProvider defaultTheme="system" attribute="class">
        <div className="transition-colors duration-300 bg-amber-50 dark:bg-black min-h-screen">{children}</div>
      </ThemeProvider>
    </div>
  );
}
