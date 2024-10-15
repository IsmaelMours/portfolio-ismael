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



