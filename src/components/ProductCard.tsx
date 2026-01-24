import styles from "./ProductCard.module.css";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductCard({
  title,
  price,
  description,
  category,
  image,
  rating,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} loading="lazy" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.category}>{category}</p>
      <div className={styles.footer}>
        <span className={styles.price}>${price}</span>
        <span className={styles.rating}>⭐{rating.rate}</span>
        <button className={styles.button}>Add to cart</button>
      </div>
    </div>
  );
}
