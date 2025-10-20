import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className={styles.button}
      aria-label="Alternar tema"
    >
      {theme === "light" ? (
        <Sun size={22} className={`${styles.icon} ${styles.iconLight}`} />
      ) : (
        <Moon size={22} className={`${styles.icon} ${styles.iconDark}`} />
      )}
    </button>
  );
}