import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Header.module.css";
import { useCartStore } from "../../store/cartStore";
import { useThemeStore } from "../../store/themeStore";

export default function Header() {
  const totalItems = useCartStore((state) => state.totalItems());
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          STORE
        </Link>
        <div className={styles.controls}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <Link to="/cart" className={styles.link}>
            🛒
            {totalItems > 0 && (
              <span className={styles.badge}>{totalItems}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
