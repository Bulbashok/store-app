import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          STORE
        </Link>
        <Link to="/cart" className={styles.link}>
          CART
        </Link>
      </div>
    </header>
  );
}
