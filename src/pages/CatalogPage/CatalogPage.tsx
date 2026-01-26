import { useEffect, useMemo, useState } from "react";
import type { Product } from "../../types/type";
import { fetchCategories, fetchProducts } from "../../api/store";
import styles from "./CatalogPage.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useCartStore } from "../../store/cartStore";
import Toast from "../../components/Toast/Toast";
import { useDebounce } from "../../hooks/useDebounce";
import CatalogPageSkeleton from "../../components/CatalogPageSkeleton/CatalogPageSkeleton";
import { truncateWords } from "../../utils/textUtils";

export default function CatalogPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCartStore();
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<
    "price-asc" | "price-desc" | "title-asc" | "title-desc"
  >("price-asc");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (debouncedSearch) {
      const query = debouncedSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query),
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result.sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return result;
  }, [products, debouncedSearch, selectedCategory, sortOption]);

  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / ITEMS_PER_PAGE,
  );
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleAddToCart = (product: Product) => {
    addItem(product);
    const truncatedTitle = truncateWords(product.title, 5);
    setToastMessage(`${truncatedTitle} added to cart!`);
  };

  const clearToast = () => {
    setToastMessage(null);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (
      value === "price-asc" ||
      value === "price-desc" ||
      value === "title-asc" ||
      value === "title-desc"
    ) {
      setSortOption(value);
    }
  };

  if (loading) {
    return <CatalogPageSkeleton />;
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Catalog</h1>
        <div className={styles.controls}>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className={styles.select}
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.search}
          />
          <select
            value={sortOption}
            onChange={handleSortChange}
            className={styles.select}
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title-asc">Name: A to Z</option>
            <option value="title-desc">Name: Z to A</option>
          </select>
        </div>
        <div className={styles.grid}>
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                inStock={product.id % 5 !== 0}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))
          ) : (
            <p className={styles.empty}>No products found.</p>
          )}
        </div>
        {totalPages > 1 && (
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={
                  currentPage === page ? styles.activePage : styles.pageButton
                }
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
      {toastMessage && (
        <Toast message={toastMessage} duration={2000} onClose={clearToast} />
      )}
    </>
  );
}
