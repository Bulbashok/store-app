import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";
import styles from "./CatalogPageSkeleton.module.css";

export default function CatalogPageSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.search} />
        <div className={styles.select} />
        <div className={styles.select} />
      </div>
      <div className={styles.grid}>
        {Array.from({ length: 12 }, (_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
