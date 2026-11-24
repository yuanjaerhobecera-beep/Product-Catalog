
import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  return (
    <div className={`product-card ${!inStock ? "out-of-stock" : ""}`}>
      {children}

      <h2>{title}</h2>

      <p className="category">{category}</p>

      <p className="price">
        ₱{price.toLocaleString("en-PH", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>

      <p className={inStock ? "stock available" : "stock unavailable"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button
        className="add-button"
        disabled={!inStock}
        onClick={() => onAddToCart(title)}
      >
        {inStock ? "Add to Cart" : "Unavailable"}
      </button>
    </div>
  );
}

export default ProductCard;
