import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.body.classList.toggle("light-mode", theme === "light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-700/30"
      aria-label="Alternar tema"
    >
      {theme === "light" ? (
        <Sun
          size={22}
          className="text-yellow-400 transition-transform duration-300 rotate-0 hover:rotate-180"
        />
      ) : (
        <Moon
          size={22}
          className="text-blue-400 transition-transform duration-300 rotate-0 hover:-rotate-180"
        />
      )}
    </button>
  );
}