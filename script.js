```javascript
/* =========================================================
   STORMLAB V2
   MENU HAMBURGER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const button = document.querySelector(".mobile-menu-btn");
    const menu = document.querySelector(".main-nav");

    if (!navbar || !button || !menu) {
        console.error("STORMLAB : éléments du menu introuvables.");
        return;
    }


    function openMenu() {

        navbar.classList.add("menu-open");

        button.textContent = "✕";

        button.setAttribute(
            "aria-expanded",
            "true"
        );

        button.setAttribute(
            "aria-label",
            "Fermer le menu"
        );

        document.body.classList.add("menu-active");
    }


    function closeMenu() {

        navbar.classList.remove("menu-open");

        button.textContent = "☰";

        button.setAttribute(
            "aria-expanded",
            "false"
        );

        button.setAttribute(
            "aria-label",
            "Ouvrir le menu"
        );

        document.body.classList.remove("menu-active");
    }


    function toggleMenu(event) {

        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        const isOpen =
            navbar.classList.contains("menu-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }


    /* Bouton hamburger */

    button.addEventListener(
        "click",
        toggleMenu
    );


    /* Liens du menu */

    const links =
        menu.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );

    });


    /* Touche Échap */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {
                closeMenu();
            }

        }
    );


    /* Clic extérieur */

    document.addEventListener(
        "click",
        function (event) {

            if (
                navbar.classList.contains("menu-open") &&
                !navbar.contains(event.target)
            ) {
                closeMenu();
            }

        }
    );


    /* Réinitialisation au redimensionnement */

    window.addEventListener(
        "resize",
        function () {

            closeMenu();

        }
    );


    /* État initial */

    closeMenu();


    console.log(
        "STORMLAB : menu correctement chargé."
    );

});
```
