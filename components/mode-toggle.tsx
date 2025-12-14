"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
    >
      <Sun
        className={
          "h-4 w-4 transition-opacity " + (isDark ? "opacity-0" : "opacity-100")
        }
      />
      <Moon
        className={
          "absolute h-4 w-4 transition-opacity " +
          (isDark ? "opacity-100" : "opacity-0")
        }
      />
      <span className="sr-only">Toggle light/dark theme</span>
    </button>
  );
}
