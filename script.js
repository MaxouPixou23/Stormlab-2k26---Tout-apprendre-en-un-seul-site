```javascript
/* =========================================================
   STORMLAB V2 — SCRIPT PRINCIPAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".mobile-menu-btn");
    const menuLinks = document.querySelectorAll(".main-nav a");

    if (!navbar || !menuButton) {
        console.warn("STORMLAB : navbar ou bouton de menu introuvable.");
        return;
    }


    /* =====================================================
       MENU ☰
    ===================================================== */

    const toggleMenu = () => {

        const isOpen = navbar.classList.toggle("menu-open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Fermer le menu" : "Ouvrir le menu"
        );

        menuButton.textContent = isOpen ? "✕" : "☰";

        /*
         * Empêche le défilement de la page lorsque
         * le menu plein écran est ouvert.
         */
        document.body.style.overflow = isOpen ? "hidden" : "";

    };


    menuButton.addEventListener("click", toggleMenu);


    /* =====================================================
       FERMER APRÈS AVOIR CHOISI UNE PAGE
    ===================================================== */

    menuLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navbar.classList.remove("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Ouvrir le menu"
            );

            menuButton.textContent = "☰";

            document.body.style.overflow = "";

        });

    });


    /* =====================================================
       FERMER AVEC LA TOUCHE ÉCHAP
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            navbar.classList.remove("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Ouvrir le menu"
            );

            menuButton.textContent = "☰";

            document.body.style.overflow = "";

        }

    });


    /* =====================================================
       FERMER SI ON CLIQUE EN DEHORS DU MENU
    ===================================================== */

    document.addEventListener("click", (event) => {

        if (!navbar.classList.contains("menu-open")) {
            return;
        }

        const clickedInsideNavbar = navbar.contains(event.target);

        if (!clickedInsideNavbar) {

            navbar.classList.remove("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Ouvrir le menu"
            );

            menuButton.textContent = "☰";

            document.body.style.overflow = "";

        }

    });


    /* =====================================================
       EFFET NAVBAR AU SCROLL
    ===================================================== */

    const updateNavbar = () => {

        if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    };


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =====================================================
       RETOUR À L'ÉTAT NORMAL SI LA FENÊTRE EST AGRANDIE
    ===================================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 1000) {

            navbar.classList.remove("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Ouvrir le menu"
            );

            menuButton.textContent = "☰";

            document.body.style.overflow = "";

        }

    });

});
```
