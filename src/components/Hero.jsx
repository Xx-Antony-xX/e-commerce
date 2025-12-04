import React, { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
    const heroRef = useRef(null)

    useEffect(() => {
        // Immediately add visible class for above-the-fold content
        if (heroRef.current) {
            heroRef.current.classList.add('visible')
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (heroRef.current) {
            observer.observe(heroRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-subtitle">New Collection 2024</p>
                    <h1 className="hero-title">
                        Timeless
                        <span className="hero-title-accent">Elegance</span>
                    </h1>
                    <p className="hero-description">
                        Discover our curated selection of premium products that blend
                        exceptional craftsmanship with contemporary design.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">Explore Collection</button>
                        <button className="btn btn-secondary">Shop Now</button>
                    </div>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Premium Products</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10K+</span>
                        <span className="stat-label">Happy Customers</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">98%</span>
                        <span className="stat-label">Satisfaction Rate</span>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-line"></div>
            </div>
        </section>
    )
}

export default Hero
