import React, { useState } from 'react'
import './ProductCard.css'

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <article
            className="product-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="product-image-wrapper">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                />
                {product.badge && (
                    <span className="product-badge">{product.badge}</span>
                )}
                <div className={`product-overlay ${isHovered ? 'visible' : ''}`}>
                    <button className="btn btn-primary quick-view-btn">Quick View</button>
                </div>
            </div>

            <div className="product-info">
                <div className="product-header">
                    <h3 className="product-name">{product.name}</h3>
                    <button className="wishlist-btn" aria-label="Add to wishlist">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>

                <p className="product-category">{product.category}</p>

                <div className="product-footer">
                    <div className="product-price">
                        {product.originalPrice && (
                            <span className="price-original">${product.originalPrice}</span>
                        )}
                        <span className="price-current">${product.price}</span>
                    </div>

                    {product.rating && (
                        <div className="product-rating">
                            <span className="rating-stars">★★★★★</span>
                            <span className="rating-count">({product.reviews})</span>
                        </div>
                    )}
                </div>
            </div>
        </article>
    )
}

export default ProductCard
