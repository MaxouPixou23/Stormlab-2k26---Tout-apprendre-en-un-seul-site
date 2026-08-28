/* =========================================================
   STORMLAB V2
   SCRIPT GLOBAL
   NAVBAR UNIVERSELLE
========================================================= */

"use strict";

(function () {

    function initNavbar() {

        const navbar =
            document.querySelector(".navbar");

        const button =
            document.getElementById("menuButton");

        const menu =
            document.getElementById("mainNav");

        if (!navbar || !button || !menu) {
            console.warn(
                "STORMLAB : navbar absente sur cette page."
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

        function toggleMenu(event) {

            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }

            if (
                navbar.classList.contains(
                    "menu-open"
                )
            ) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        /* =================================================
           BOUTON
        ================================================= */

        button.addEventListener(
            "click",
            toggleMenu
        );

        /* =================================================
           LIENS DU MENU
        ================================================= */

        menu.addEventListener(
            "click",
            function (event) {

                const link =
                    event.target.closest(
                        ".menu-link"
                    );

                if (!link) {
                    return;
                }

                /*
                 * Laisser le navigateur suivre
                 * normalement le href.
                 */

                closeMenu();
            }
        );

        /* =================================================
           CLIC EXTERIEUR
        ================================================= */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !navbar.classList.contains(
                        "menu-open"
                    )
                ) {
                    return;
                }

                if (
                    !navbar.contains(
                        event.target
                    )
                ) {
                    closeMenu();
                }
            }
        );

        /* =================================================
           ESC
        ================================================= */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    navbar.classList.contains(
                        "menu-open"
                    )
                ) {

                    closeMenu();

                    button.focus();
                }
            }
        );

        /* =================================================
           REDIMENSIONNEMENT
        ================================================= */

        window.addEventListener(
            "resize",
            function () {

                if (
                    window.innerWidth > 700
                ) {
                    /*
                     * On ne ferme pas le menu
                     * automatiquement ici :
                     * cela évite les bugs lorsque
                     * la fenêtre change de taille.
                     */
                }

            }
        );

        /* =================================================
           LIEN ACTIF
        ================================================= */

        const currentPage =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();

        const links =
            menu.querySelectorAll(
                ".menu-link"
            );

        links.forEach(
            function (link) {

                const href =
                    link.getAttribute("href");

                if (!href) {
                    return;
                }

                const targetPage =
                    href
                        .split("/")
                        .pop()
                        .split("?")[0]
                        .split("#")[0]
                        .toLowerCase();

                link.classList.remove(
                    "active"
                );

                if (
                    targetPage === currentPage
                ) {
                    link.classList.add(
                        "active"
                    );
                }

            }
        );

        /*
         * index.html
         */

        if (
            currentPage === "" ||
            currentPage === "index.html"
        ) {

            const home =
                menu.querySelector(
                    'a[href*="index.html"]'
                );

            if (home) {
                home.classList.add("active");
            }
        }

        closeMenu();

        console.log(
            "STORMLAB V2 : navbar universelle OK."
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

    function initImages() {

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
            initImages
        );

    } else {

        initImages();

    }

})();
