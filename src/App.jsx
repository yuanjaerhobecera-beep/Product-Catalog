
import { useState } from "react";
import ProductCard from "./components/ProductCard.jsx";
import products from "./data/products.js";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState(""); 

  function handleAddToCart(productTitle) {
    setCartCount((previousCount) => previousCount + 1);
    setLastAdded(productTitle);
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

        <div className="product-grid">

          {products.map((product) => (
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
      </main>

      <footer>
        <p>
        Laboratory Exercise 3
        </p>
      </footer>

    </div>
  );
}

export default App;
