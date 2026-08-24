import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ThemeToggle = () => (
  <Button
    aria-label="Toggle theme"
    onClick={() => {
      const root = document.documentElement;
      const next = root.classList.contains("dark") ? "light" : "dark";
      root.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
    }}
    size="icon-sm"
    variant="outline"
  >
    <SunIcon className="dark:hidden" />
    <MoonIcon className="hidden dark:block" />
  </Button>
);
