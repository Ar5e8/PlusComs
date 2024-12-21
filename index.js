document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".bigscreen > button");
    const html = document.documentElement;

    // Disable scrolling initially
    html.style.overflow = "hidden";

    // Enable scrolling when button animation finishes
    button.addEventListener("animationend", () => {
        html.style.overflow = "auto"; // Allow scrolling on the entire document
    });
});

// Scroll to the top on page load
window.onload = function() {
    window.scrollTo(0, 0);
};
