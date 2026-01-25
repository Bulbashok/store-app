import { useEffect, useState } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

export default function Toast({
  message,
  duration = 2000,
  onClose,
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      const animationTimer = setTimeout(() => {
        onClose();
      }, 300);
      return () => clearTimeout(animationTimer);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return <div className={styles.toast}>{message}</div>;
}
