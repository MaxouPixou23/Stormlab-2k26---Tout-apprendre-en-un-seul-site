```javascript
/* =========================================================
   STORMLAB V2
   SCRIPT PRINCIPAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".mobile-menu-btn");
    const menu = document.querySelector(".main-nav");

    /* -----------------------------------------------------
       Vérification
    ----------------------------------------------------- */

    if (!navbar || !menuButton || !menu) {
        console.warn(
            "STORMLAB : navbar, bouton ou menu introuvable."
        );

        return;
    }


    /* -----------------------------------------------------
       Fonction : fermer le menu
    ----------------------------------------------------- */

    function closeMenu() {

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


    /* -----------------------------------------------------
       Fonction : ouvrir / fermer le menu
    ----------------------------------------------------- */

    function toggleMenu() {

        const isOpen =
            navbar.classList.toggle("menu-open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
        );

        menuButton.textContent =
            isOpen ? "✕" : "☰";

        /*
         * Bloque le défilement de la page
         * lorsque le menu est ouvert.
         */

        document.body.style.overflow =
            isOpen ? "hidden" : "";

    }


    /* -----------------------------------------------------
       Clic sur ☰
    ----------------------------------------------------- */

    menuButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            toggleMenu();

        }
    );


    /* -----------------------------------------------------
       Clic sur un lien
    ----------------------------------------------------- */

    const links =
        menu.querySelectorAll("a");

    links.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                closeMenu();

            }
        );

    });


    /* -----------------------------------------------------
       Touche Échap
    ----------------------------------------------------- */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );


    /* -----------------------------------------------------
       Clic en dehors
    ----------------------------------------------------- */

    document.addEventListener(
        "click",
        (event) => {

            if (!navbar.classList.contains("menu-open")) {
                return;
            }

            if (!navbar.contains(event.target)) {

                closeMenu();

            }

        }
    );


    /* -----------------------------------------------------
       Scroll navbar
    ----------------------------------------------------- */

    function updateNavbar() {

        if (window.scrollY > 20) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* -----------------------------------------------------
       Resize
    ----------------------------------------------------- */

    window.addEventListener(
        "resize",
        () => {

            /*
             * On réinitialise le menu lorsque
             * la fenêtre change de taille.
             */

            closeMenu();

        }
    );


    /* -----------------------------------------------------
       État initial
    ----------------------------------------------------- */

    closeMenu();

});
```
