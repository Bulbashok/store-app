import { Route, Routes } from "react-router-dom";
import "./App.css";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CartPage from "./pages/CardPage/CartPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
