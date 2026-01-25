import { useEffect, useState } from "react";
import type { Product } from "../../types/type";
import { fetchProducts } from "../../api/store";
import styles from "./CatalogPage.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useCartStore } from "../../store/cartStore";
import Toast from "../../components/Toast/Toast";

export default function CatalogPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCartStore();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, []);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    setToastMessage(`${product.title} added to cart!`);
  };

  const clearToast = () => {
    setToastMessage(null);
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Catalog Page</h1>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              inStock={true}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
      {toastMessage && (
        <Toast message={toastMessage} duration={2000} onClose={clearToast} />
      )}
    </>
  );
}
