import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  console.log('product: ', product);
  const isOutOfStock =
    product.availabilityStatus?.toLowerCase().includes("out");

  return (
    <div className="product-card">

      <div className="image-wrapper">
        <img src={product.thumbnail} alt={product.title} />

        {product.discountPercentage > 0 && (
          <span className="badge">
            {Math.round(product.discountPercentage)}% OFF
          </span>
        )}
      </div>

      <div className="content">
        <p className="brand">{product.brand}</p>

        <h3 className="title">{product.title}</h3>
        <p className="des">{product.description}</p>
        <div className="rating">
          ⭐ <span>{product.rating}</span>
        </div>

        <div className="price-row">
          <span className="price">${product.price}</span>
          <span className="mrp">
            ${product.price}
          </span>
        </div>

        <p className={`stock ${isOutOfStock ? "out" : "in"}`}>
          {product.availabilityStatus}
        </p>
      </div>

      <button disabled={isOutOfStock}>
        {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
}
