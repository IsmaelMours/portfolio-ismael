gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    // Large screens (Desktop, Tablet)
    "(min-width: 769px)": function() {
        const panels = document.querySelectorAll(".panel");
        panels.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                end: "bottom top",
                pin: true, // Pin sections on larger screens
                pinSpacing: false, // No extra spacing between pinned elements
            });
        });
    },

    // Small screens (Mobile and Tablet)
    "(max-width: 768px)": function() {
        const panels = document.querySelectorAll(".panel");
        panels.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                end: "bottom top",
                pin: true, // Keep pinning enabled
                pinSpacing: true, // Add spacing between pinned sections for smoother scroll
                onEnter: () => {
                    // Set a minimum height to avoid cramping on mobile screens
                    panel.style.minHeight = '100vh';
                },
                onLeave: () => {
                    // Ensure smooth transition by resetting height on leave
                    panel.style.height = 'auto';
                }
            });
        });
    }
});
