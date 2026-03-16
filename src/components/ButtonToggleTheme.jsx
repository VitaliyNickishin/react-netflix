import { useTheme } from "../hooks/useTheme";

export const ButtonToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="sm:w-21 text-sm px-1 sm:px-3 py-1 rounded border text-white bg-black dark:bg-transparent border-black/20 dark:border-white/10 hover:bg-white hover:text-black transition"
      onClick={toggleTheme}
    >
      <span>{isDark ? "☀️" : "🌙"}</span>
      <span className="hidden sm:inline">{isDark ? " Light" : " Dark"}</span>
    </button>
  );
};
