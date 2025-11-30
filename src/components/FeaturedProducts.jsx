import React from 'react'
import ProductCard from './ProductCard'
import './FeaturedProducts.css'

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            name: 'Luxury Leather Bag',
            category: 'Handbags',
            price: 599,
            originalPrice: 799,
            image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600',
            badge: 'New',
            rating: 4.8,
            reviews: 124
        },
        {
            id: 2,
            name: 'Designer Shoes',
            category: 'Footwear',
            price: 449,
            image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600',
            rating: 4.9,
            reviews: 89
        },
        {
            id: 3,
            name: 'Premium Sunglasses',
            category: 'Accessories',
            price: 299,
            originalPrice: 399,
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600',
            badge: 'Sale',
            rating: 4.7,
            reviews: 156
        },
        {
            id: 4,
            name: 'Classic Watch',
            category: 'Watches',
            price: 899,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600',
            rating: 5.0,
            reviews: 203
        },
        {
            id: 5,
            name: 'Elegant Bracelet',
            category: 'Jewelry',
            price: 349,
            image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600',
            badge: 'New',
            rating: 4.6,
            reviews: 67
        },
        {
            id: 6,
            name: 'Designer Wallet',
            category: 'Accessories',
            price: 199,
            originalPrice: 249,
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600',
            rating: 4.8,
            reviews: 142
        }
    ]

    return (
        <section className="featured-products section" id="products">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Collection</h2>
                    <p className="section-description">
                        Discover our handpicked selection of premium products
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="section-footer">
                    <button className="btn btn-secondary">View All Products</button>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts
