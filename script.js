/* =========================================================
   STORMLAB V2
   NAVBAR + INTERACTIONS
========================================================= */

"use strict";


/* =========================================================
   NAVBAR
========================================================= */

(function () {

    function initNavbar() {

        const navbar = document.querySelector(".navbar");
        const button = document.getElementById("menuButton");
        const menu = document.getElementById("mainNav");

        if (!navbar || !button || !menu) {
            console.error(
                "STORMLAB : éléments de navigation introuvables."
            );
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
        }

        function toggleMenu() {

            if (
                navbar.classList.contains("menu-open")
            ) {
                closeMenu();
            } else {
                openMenu();
            }
        }


        /* BOUTON MENU */

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                toggleMenu();
            }
        );


        /* LIENS DU MENU */

        menu.addEventListener(
            "click",
            function (event) {

                const link =
                    event.target.closest("a");

                if (link) {
                    closeMenu();
                }
            }
        );


        /* CLIC EN DEHORS */

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


        /* TOUCHE ÉCHAP */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    navbar.classList.contains("menu-open")
                ) {

                    closeMenu();

                    button.focus();
                }
            }
        );


        /* REDIMENSIONNEMENT */

        window.addEventListener(
            "resize",
            function () {

                if (
                    window.innerWidth > 700 &&
                    navbar.classList.contains("menu-open")
                ) {
                    closeMenu();
                }
            }
        );


        /* ÉTAT INITIAL */

        closeMenu();

        console.log(
            "STORMLAB V2 : navbar opérationnelle."
        );
    }


    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initNavbar
        );

    } else {

        initNavbar();
    }

})();


/* =========================================================
   IMAGE FALLBACK
========================================================= */

(function () {

    function initImageFallback() {

        const images =
            document.querySelectorAll("img");

        images.forEach(
            function (image) {

                image.addEventListener(
                    "error",
                    function () {

                        image.classList.add(
                            "image-error"
                        );

                        console.warn(
                            "STORMLAB : image introuvable :",
                            image.src
                        );
                    },
                    {
                        once: true
                    }
                );
            }
        );
    }


    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initImageFallback
        );

    } else {

        initImageFallback();
    }

})();
