gsap.registerPlugin(ScrollTrigger);

// Create scroll triggers for each panel
const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top", // Start when the top of the panel hits the top of the viewport
        end: "bottom top", // End when the bottom of the panel hits the top of the viewport
        pin: true, // Pin the panel
        pinSpacing: false // No spacing between pinned elements
    });
});

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Animation for the main title
    gsap.from('.main-title', {
        duration: 1,       // Duration of animation
        y: -50,            // Start position (above)
        opacity: 0,        // Start fully transparent
        ease: 'power2.out',// Easing function
        delay: 0.5         // Delay before starting
    });

    // Animation for the welcome text
    gsap.from('.welcome-text', {
        duration: 1,       // Duration of animation
        y: 30,             // Start position (below)
        opacity: 0,        // Start fully transparent
        ease: 'power2.out',// Easing function
        delay: 1           // Delay before starting
    });

    // Scroll down animation (optional)
    gsap.from('.scroll-down', {
        duration: 1,
        opacity: 0,        // Start fully transparent
        scale: 0.5,        // Start smaller
        ease: 'bounce.out',// Easing function
        delay: 1.5         // Delay before starting
    });
});

