import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-brand">LUXE</h3>
                        <p className="footer-description">
                            Premium e-commerce experience with exceptional products and service.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="var(--color-bg)"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="var(--color-bg)" strokeWidth="2"></line>
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Shop</h4>
                        <ul className="footer-links">
                            <li><a href="#new-arrivals">New Arrivals</a></li>
                            <li><a href="#collections">Collections</a></li>
                            <li><a href="#sale">Sale</a></li>
                            <li><a href="#gift-cards">Gift Cards</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Support</h4>
                        <ul className="footer-links">
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#shipping">Shipping</a></li>
                            <li><a href="#returns">Returns</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Newsletter</h4>
                        <p className="newsletter-text">
                            Subscribe to get special offers and updates.
                        </p>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="newsletter-input"
                                aria-label="Email address"
                            />
                            <button type="submit" className="btn btn-primary newsletter-btn">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © 2024 LUXE. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
