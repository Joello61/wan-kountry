'use client'
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group flex h-8 w-8 items-center justify-center transition-all duration-300 rounded-lg hover-lift focus-ring"
      style={{
        backgroundColor: 'var(--surface)',
        color: 'var(--text)'
      }}
    >
      <span className="group-hover:rotate-180 transition-transform duration-700 ease-in-out">
        <FiSun className="hidden dark:block" size={20} />
        <FiMoon className="dark:hidden" size={20} />
      </span>
    </button>
  );
};

export default ThemeToggler;