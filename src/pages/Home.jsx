import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <FeaturedProducts />
        </div>
    )
}

export default Home
