
import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard.jsx";
import SearchBar from "./components/SearchBar.jsx";
import products from "./data/products.js";
import "./App.css";

function App() {
  // Cart states from Lab 3
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Lab 4 states
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  // Filter and sort products
  const filteredProducts = [...products]
    .filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "low-to-high") {
        return a.price - b.price;
      }

      if (sortOrder === "high-to-low") {
        return b.price - a.price;
      }

      return 0;
    });

  // Update browser tab title
  useEffect(() => {
    document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);

  // Add to cart
  function handleAddToCart(productTitle) {
    setCartCount((previousCount) => previousCount + 1);
    setLastAdded(productTitle);
  }

  // Clear filters
  function handleClearFilters() {
    setSearchText("");
    setDebouncedSearch("");
    setCategory("All");
    setSortOrder("default");
  }

  return (
    <div className="app">

      <header className="header">
        <h1>CvSU Mini Store</h1>
        <p>Your one-stop mini product catalog</p>
      </header>

      <div className="cart-message">
        {cartCount === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <p>
            Items added to cart: {cartCount}
            {" "}(Last added: {lastAdded})
          </p>
        )}
      </div>

      <main className="product-container">
        <h2>Our Products</h2>

        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          category={category}
          setCategory={setCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          onClear={handleClearFilters}
        />

        <p className="result-count">
          Showing {filteredProducts.length} of {products.length} products
        </p>

        {filteredProducts.length === 0 ? (
          <p className="empty-message">
            No products found. Try a different keyword or category.
          </p>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                inStock={product.inStock}
                onAddToCart={handleAddToCart}
              >
                {product.id === 1 && (
                  <span className="badge">New</span>
                )}

                {product.id === 5 && (
                  <span className="badge">Sale</span>
                )}
              </ProductCard>
            ))}
          </div>
        )}
      </main>

      <footer>
        <p>Laboratory Exercise 4</p>
      </footer>

    </div>
  );
}

export default App;
