/* =========================================================
   STORMLAB V2
   GLOBAL JAVASCRIPT
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
                "STORMLAB : navbar introuvable."
            );
            return;
        }


        /* =================================================
           OUVRIR
        ================================================= */

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


        /* =================================================
           FERMER
        ================================================= */

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


        /* =================================================
           TOGGLE
        ================================================= */

        function toggleMenu(event) {

            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }

            if (
                navbar.classList.contains("menu-open")
            ) {

                closeMenu();

            } else {

                openMenu();

            }
        }


        /* =================================================
           BOUTON ☰
        ================================================= */

        button.addEventListener(
            "click",
            toggleMenu
        );


        /* =================================================
           LIENS DU MENU
           
           IMPORTANT :
           on ne bloque PAS la navigation.
        ================================================= */

        const menuLinks =
            menu.querySelectorAll(".menu-link");

        menuLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    /*
                     * Laisse le navigateur suivre
                     * normalement le href.
                     */

                    closeMenu();

                }
            );

        });


        /* =================================================
           CLIC EXTÉRIEUR
        ================================================= */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !navbar.classList.contains("menu-open")
                ) {
                    return;
                }

                if (
                    navbar.contains(event.target)
                ) {
                    return;
                }

                closeMenu();

            }
        );


        /* =================================================
           ÉCHAP
        ================================================= */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key !== "Escape"
                ) {
                    return;
                }

                if (
                    !navbar.classList.contains("menu-open")
                ) {
                    return;
                }

                closeMenu();

                button.focus();

            }
        );


        /* =================================================
           REDIMENSIONNEMENT
        ================================================= */

        window.addEventListener(
            "resize",
            function () {

                /*
                 * On ferme uniquement lorsque
                 * la fenêtre change réellement de taille.
                 */

                if (
                    window.innerWidth > 700 &&
                    navbar.classList.contains("menu-open")
                ) {

                    closeMenu();

                }

            }
        );


        /* =================================================
           ÉTAT INITIAL
        ================================================= */

        closeMenu();


        console.log(
            "STORMLAB V2 : navbar opérationnelle."
        );

    }


    /* =====================================================
       DOM READY
    ===================================================== */

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

        images.forEach(function (image) {

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

        });

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


/* =========================================================
   LIENS INTERNES
========================================================= */

(function () {

    function initInternalLinks() {

        const links =
            document.querySelectorAll(
                'a[href]'
            );

        links.forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const href =
                        link.getAttribute("href");

                    if (!href) {
                        return;
                    }

                    /*
                     * Les ancres, liens externes,
                     * téléchargements et nouveaux onglets
                     * ne sont pas modifiés.
                     */

                    if (
                        href.startsWith("#") ||
                        href.startsWith("http://") ||
                        href.startsWith("https://") ||
                        href.startsWith("mailto:") ||
                        link.target === "_blank"
                    ) {
                        return;
                    }

                    /*
                     * Navigation classique :
                     * aucun preventDefault ici.
                     */

                }
            );

        });

    }


    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initInternalLinks
        );

    } else {

        initInternalLinks();

    }

})();
