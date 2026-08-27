```javascript
document.addEventListener("DOMContentLoaded", () => {

    // Animation d'apparition
    const elements = document.querySelectorAll(
        ".card, .section-title, .manual, .chasing"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.12
    });

    elements.forEach(element => observer.observe(element));


    // Navigation mobile
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }


    // Année automatique dans les copyrights
    document.querySelectorAll(".copyright").forEach(element => {
        element.textContent = `© ${new Date().getFullYear()} STORMLAB`;
    });

});
```
