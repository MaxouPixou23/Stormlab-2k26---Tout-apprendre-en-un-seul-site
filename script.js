```javascript
document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".mobile-menu-btn");
    const mainNav = document.querySelector(".main-nav");

    if (!navbar || !menuButton || !mainNav) {
        console.error("STORMLAB : navbar introuvable.");
        return;
    }

    function openMenu() {
        navbar.classList.add("menu-open");

        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Fermer le menu");

        menuButton.textContent = "✕";

        document.body.classList.add("menu-active");
    }

    function closeMenu() {
        navbar.classList.remove("menu-open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Ouvrir le menu");

        menuButton.textContent = "☰";

        document.body.classList.remove("menu-active");
    }

    function toggleMenu() {
        if (navbar.classList.contains("menu-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    menuButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    document.addEventListener("click", (event) => {
        if (
            navbar.classList.contains("menu-open") &&
            !navbar.contains(event.target)
        ) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        closeMenu();
    });

});
```
