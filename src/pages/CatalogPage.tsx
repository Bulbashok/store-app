import ProductCard from "../components/ProductCard";

export default function CatalogPage() {
  return (
    <>
      <h1>Catalog Page</h1>
      <ProductCard
        id={1}
        title="Opna Women's Short Sleeve Moisture"
        price={7.95}
        description="100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit"
        category="women's clothing"
        image="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png"
        rating={{
          rate: 4.5,
          count: 146,
        }}
      />
    </>
  );
}
