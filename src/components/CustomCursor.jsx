import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './CustomCursor.css'

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const followerRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const follower = followerRef.current

        // Hide default cursor
        document.body.style.cursor = 'none'

        // Mouse move handler
        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            })

            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            })
        }

        // Mouse down/up handlers for click effect
        const handleMouseDown = () => {
            gsap.to(cursor, {
                scale: 0.8,
                duration: 0.2,
                ease: 'power2.out'
            })
            gsap.to(follower, {
                scale: 0.7,
                duration: 0.2,
                ease: 'power2.out'
            })
        }

        const handleMouseUp = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            })
            gsap.to(follower, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            })
        }

        // Hover effect for interactive elements
        const handleMouseEnter = (e) => {
            const isButton = e.target.tagName === 'BUTTON' || e.target.classList.contains('btn')

            if (isButton) {
                // Enhanced effect for buttons with rotation and pulse
                gsap.to(cursor, {
                    scale: 2.5,
                    backgroundColor: 'rgba(0, 0, 0, 1)',
                    duration: 0.4,
                    ease: 'back.out(2)'
                })
                gsap.to(follower, {
                    scale: 2.5,
                    borderWidth: 3,
                    borderColor: 'rgba(0, 0, 0, 0.9)',
                    rotation: 90,
                    duration: 0.4,
                    ease: 'back.out(2)'
                })

                // Add pulsing animation
                gsap.to(follower, {
                    scale: 2.7,
                    duration: 0.6,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true
                })
            } else {
                // Regular hover for links with subtle rotation
                gsap.to(cursor, {
                    scale: 1.5,
                    backgroundColor: 'rgba(100, 100, 100, 0.8)',
                    duration: 0.3,
                    ease: 'power2.out'
                })
                gsap.to(follower, {
                    scale: 1.5,
                    borderColor: 'rgba(150, 150, 150, 0.6)',
                    rotation: 45,
                    duration: 0.3,
                    ease: 'power2.out'
                })
            }
        }

        const handleMouseLeave = () => {
            // Kill any ongoing animations
            gsap.killTweensOf(follower)

            gsap.to(cursor, {
                scale: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                duration: 0.4,
                ease: 'power2.out'
            })
            gsap.to(follower, {
                scale: 1,
                borderWidth: 2,
                borderColor: 'rgba(200, 200, 200, 0.4)',
                rotation: 0,
                duration: 0.4,
                ease: 'power2.out'
            })
        }

        // Add event listeners
        document.addEventListener('mousemove', moveCursor)
        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)

        // Add hover effects to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn, .product-card, .collection-card, .category-btn, .icon-btn, input, textarea, select')

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        // Cleanup
        return () => {
            document.body.style.cursor = 'auto'
            document.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)

            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <>
            <div ref={cursorRef} className="custom-cursor"></div>
            <div ref={followerRef} className="cursor-follower"></div>
        </>
    )
}

export default CustomCursor
