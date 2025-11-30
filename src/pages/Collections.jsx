import React from 'react'
import './Collections.css'

const Collections = () => {
    const collections = [
        {
            id: 1,
            name: 'Summer Essentials',
            description: 'Light, breezy pieces perfect for warm days',
            image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800',
            itemCount: 24
        },
        {
            id: 2,
            name: 'Executive Collection',
            description: 'Sophisticated pieces for the modern professional',
            image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800',
            itemCount: 32
        },
        {
            id: 3,
            name: 'Evening Glamour',
            description: 'Elegant accessories for special occasions',
            image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=800',
            itemCount: 18
        },
        {
            id: 4,
            name: 'Minimalist Chic',
            description: 'Clean lines and timeless design',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800',
            itemCount: 28
        }
    ]

    return (
        <div className="collections-page">
            <div className="collections-header">
                <div className="container">
                    <h1 className="page-title">Our Collections</h1>
                    <p className="page-description">
                        Carefully curated collections designed to elevate your style
                    </p>
                </div>
            </div>

            <div className="container collections-content section">
                <div className="collections-grid">
                    {collections.map((collection) => (
                        <div key={collection.id} className="collection-card">
                            <div className="collection-image-wrapper">
                                <img
                                    src={collection.image}
                                    alt={collection.name}
                                    className="collection-image"
                                    loading="lazy"
                                />
                                <div className="collection-overlay">
                                    <button className="btn btn-primary">Shop Collection</button>
                                </div>
                            </div>
                            <div className="collection-info">
                                <h3 className="collection-name">{collection.name}</h3>
                                <p className="collection-description">{collection.description}</p>
                                <p className="collection-count">{collection.itemCount} Items</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collections
