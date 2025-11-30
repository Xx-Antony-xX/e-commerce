import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu when route changes
    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    const isActive = (path) => location.pathname === path

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-brand">
                    <h1 className="brand-logo">LUXE</h1>
                </Link>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/products" className={isActive('/products') ? 'active' : ''}>Products</Link></li>
                    <li><Link to="/collections" className={isActive('/collections') ? 'active' : ''}>Collections</Link></li>
                    <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
                    <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
                </ul>

                <div className="navbar-actions">
                    <button className="icon-btn" aria-label="Search">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                    </button>
                    <button className="icon-btn" aria-label="Shopping cart">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span className="cart-badge">2</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
