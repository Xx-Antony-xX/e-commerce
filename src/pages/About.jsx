import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="about-page">
            <div className="about-header">
                <div className="container">
                    <h1 className="page-title">About LUXE</h1>
                    <p className="page-description">
                        Crafting timeless elegance since 2020
                    </p>
                </div>
            </div>

            <div className="container about-content">
                <section className="about-section">
                    <div className="section-grid">
                        <div className="section-text">
                            <h2 className="section-heading">Our Story</h2>
                            <p className="section-paragraph">
                                LUXE was born from a passion for exceptional craftsmanship and timeless design.
                                We believe that luxury isn't just about price—it's about quality, attention to
                                detail, and pieces that stand the test of time.
                            </p>
                            <p className="section-paragraph">
                                Our curated collection brings together the finest materials and expert
                                artisanship from around the world, creating pieces that you'll treasure for years to come.
                            </p>
                        </div>
                        <div className="section-image">
                            <img
                                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800"
                                alt="Luxury store interior"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                <section className="values-section section">
                    <h2 className="section-title">Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">✨</div>
                            <h3 className="value-title">Quality First</h3>
                            <p className="value-description">
                                Every product is carefully selected and inspected to meet our exacting standards.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🌍</div>
                            <h3 className="value-title">Sustainability</h3>
                            <p className="value-description">
                                We're committed to ethical sourcing and sustainable practices in everything we do.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">💎</div>
                            <h3 className="value-title">Timeless Design</h3>
                            <p className="value-description">
                                We focus on classic pieces that transcend trends and remain stylish for years.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">❤️</div>
                            <h3 className="value-title">Customer Care</h3>
                            <p className="value-description">
                                Your satisfaction is our priority. We're here to ensure an exceptional experience.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="commitment-section section">
                    <div className="section-grid reverse">
                        <div className="section-image">
                            <img
                                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800"
                                alt="Craftsmanship"
                                loading="lazy"
                            />
                        </div>
                        <div className="section-text">
                            <h2 className="section-heading">Our Commitment</h2>
                            <p className="section-paragraph">
                                We partner with skilled artisans and renowned designers who share our vision
                                for excellence. Each piece in our collection represents the perfect marriage
                                of traditional craftsmanship and contemporary design.
                            </p>
                            <p className="section-paragraph">
                                From sourcing premium materials to the final quality check, we maintain
                                rigorous standards at every step. This dedication ensures that every LUXE
                                product is something you can feel proud to own and use.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
