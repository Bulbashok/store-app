import type { ProductCardProps } from "../../types/type";
import styles from "./ProductCard.module.css";

export default function ProductCard({
  title,
  price,
  description,
  category,
  image,
  rating,
  inStock = true,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} loading="lazy" />
      <div className={styles.info}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <div>
            <span className={styles.price}>${price.toFixed(2)}</span>
            <span className={styles.rating}>⭐ {rating.rate}</span>
          </div>
          {inStock ? (
            <button
              className={styles.button}
              onClick={onAddToCart}
              aria-label={`Add ${title} to cart`}
            >
              Add to cart
            </button>
          ) : (
            <span className={styles.outOfStock}>Out of stock</span>
          )}
        </div>
      </div>
    </div>
  );
}
