import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useCartStore } from "../../store/cartStore";

export default function Header() {
  const totalItems = useCartStore((state) => state.totalItems());

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          STORE
        </Link>
        <Link to="/cart" className={styles.link}>
          🛒
          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </Link>
      </div>
    </header>
  );
}
