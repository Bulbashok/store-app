import { useCartStore } from "../../store/cartStore";
import type { CartItem } from "../../types/type";
import styles from "./CartPage.module.css";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } =
    useCartStore();

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>Your cart is empty</h2>
        <a href="/">← Continue shopping</a>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shopping Cart</h1>

      <div className={styles.items}>
        {items.map((item: CartItem) => (
          <div key={item.id} className={styles.item}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.info}>
              <h3>{item.title}</h3>
              <p className={styles.price}>${item.price.toFixed(2)}</p>
            </div>
            <div className={styles.quantity}>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className={styles.quantityValue}>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              className={styles.remove}
              onClick={() => removeItem(item.id)}
              aria-label="Remove item"
            ></button>
            <div className={styles.total}>
              Total price: ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryRow}>
          <span>Total items:</span>
          <strong>{totalItems()}</strong>
        </div>
        <div className={styles.summaryRow}>
          <span>Total price:</span>
          <strong>${totalPrice().toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}
