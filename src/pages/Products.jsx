import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import './Products.css'

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortBy, setSortBy] = useState('featured')

    const categories = [
        { id: 'all', name: 'All Products' },
        { id: 'handbags', name: 'Handbags' },
        { id: 'shoes', name: 'Shoes' },
        { id: 'accessories', name: 'Accessories' },
        { id: 'jewelry', name: 'Jewelry' },
        { id: 'watches', name: 'Watches' }
    ]

    const allProducts = [
        {
            id: 1,
            name: 'Luxury Leather Bag',
            category: 'handbags',
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
            category: 'shoes',
            price: 449,
            image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600',
            rating: 4.9,
            reviews: 89
        },
        {
            id: 3,
            name: 'Premium Sunglasses',
            category: 'accessories',
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
            category: 'watches',
            price: 899,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600',
            rating: 5.0,
            reviews: 203
        },
        {
            id: 5,
            name: 'Elegant Bracelet',
            category: 'jewelry',
            price: 349,
            image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600',
            badge: 'New',
            rating: 4.6,
            reviews: 67
        },
        {
            id: 6,
            name: 'Designer Wallet',
            category: 'accessories',
            price: 199,
            originalPrice: 249,
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600',
            rating: 4.8,
            reviews: 142
        },
        {
            id: 7,
            name: 'Tote Bag',
            category: 'handbags',
            price: 399,
            image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=600',
            rating: 4.5,
            reviews: 98
        },
        {
            id: 8,
            name: 'Luxury Heels',
            category: 'shoes',
            price: 549,
            image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600',
            badge: 'New',
            rating: 4.9,
            reviews: 76
        },
        {
            id: 9,
            name: 'Gold Necklace',
            category: 'jewelry',
            price: 799,
            originalPrice: 999,
            image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600',
            badge: 'Sale',
            rating: 4.8,
            reviews: 134
        },
        {
            id: 10,
            name: 'Sport Watch',
            category: 'watches',
            price: 699,
            image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=600',
            rating: 4.7,
            reviews: 189
        },
        {
            id: 11,
            name: 'Leather Belt',
            category: 'accessories',
            price: 149,
            image: 'https://images.unsplash.com/photo-1624222247344-550fb60583bb?q=80&w=600',
            rating: 4.6,
            reviews: 112
        },
        {
            id: 12,
            name: 'Crossbody Bag',
            category: 'handbags',
            price: 459,
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600',
            badge: 'New',
            rating: 4.9,
            reviews: 145
        }
    ]

    const filteredProducts = selectedCategory === 'all'
        ? allProducts
        : allProducts.filter(p => p.category === selectedCategory)

    return (
        <div className="products-page">
            <div className="products-header">
                <div className="container">
                    <h1 className="page-title">Our Collection</h1>
                    <p className="page-description">Discover our curated selection of premium products</p>
                </div>
            </div>

            <div className="container products-content">
                <aside className="products-sidebar">
                    <div className="sidebar-section">
                        <h3 className="sidebar-title">Categories</h3>
                        <ul className="category-list">
                            {categories.map(category => (
                                <li key={category.id}>
                                    <button
                                        className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                                        onClick={() => setSelectedCategory(category.id)}
                                    >
                                        {category.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sidebar-section">
                        <h3 className="sidebar-title">Sort By</h3>
                        <select
                            className="sort-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="newest">Newest First</option>
                        </select>
                    </div>
                </aside>

                <div className="products-main">
                    <div className="products-toolbar">
                        <p className="products-count">{filteredProducts.length} Products</p>
                    </div>

                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
