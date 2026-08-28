```javascript
/* =========================================================
   STORMLAB V2
   SCRIPT GLOBAL
   NAVBAR + INTERACTIONS
========================================================= */

"use strict";


/* =========================================================
   NAVBAR STORMLAB
========================================================= */

(function () {

    function initNavbar() {

        const navbar = document.querySelector(".navbar");
        const button = document.getElementById("menuButton");
        const menu = document.getElementById("mainNav");

        /*
         * Si la page ne possède pas de navbar,
         * on arrête proprement le script.
         */
        if (!navbar || !button || !menu) {
            console.warn(
                "STORMLAB V2 : navbar absente sur cette page."
            );
            return;
        }


        /* =================================================
           ÉTAT DU MENU
        ================================================= */

        let isOpen = false;


        /* =================================================
           OUVRIR
        ================================================= */

        function openMenu() {

            if (isOpen) {
                return;
            }

            isOpen = true;

            navbar.classList.add("menu-open");

            button.setAttribute(
                "aria-expanded",
                "true"
            );

            button.setAttribute(
                "aria-label",
                "Fermer le menu"
            );

            button.textContent = "✕";
        }


        /* =================================================
           FERMER
        ================================================= */

        function closeMenu() {

            if (!isOpen) {
                return;
            }

            isOpen = false;

            navbar.classList.remove("menu-open");

            button.setAttribute(
                "aria-expanded",
                "false"
            );

            button.setAttribute(
                "aria-label",
                "Ouvrir le menu"
            );

            button.textContent = "☰";
        }


        /* =================================================
           TOGGLE
        ================================================= */

        function toggleMenu(event) {

            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        }


        /* =================================================
           BOUTON MENU
        ================================================= */

        button.addEventListener(
            "click",
            toggleMenu,
            false
        );


        /*
         * Certains navigateurs/appareils utilisent
         * pointerup pour les boutons tactiles.
         *
         * On ne l'utilise pas ici afin d'éviter
         * un double déclenchement click + pointerup.
         */


        /* =================================================
           CLIC DANS LE MENU
        ================================================= */

        menu.addEventListener(
            "click",
            function (event) {

                const link =
                    event.target.closest(".menu-link");

                /*
                 * Si ce n'est pas un lien STORMLAB,
                 * on ne fait rien.
                 */
                if (!link) {
                    return;
                }

                /*
                 * On ferme le menu immédiatement,
                 * puis le navigateur suit normalement
                 * le href du lien.
                 */
                closeMenu();
            },
            false
        );


        /* =================================================
           CLIC SUR LE LOGO
        ================================================= */

        const logo =
            navbar.querySelector(".logo");

        if (logo) {

            logo.addEventListener(
                "click",
                function () {

                    closeMenu();

                },
                false
            );
        }


        /* =================================================
           CLIC EN DEHORS DU MENU
        ================================================= */

        document.addEventListener(
            "click",
            function (event) {

                if (!isOpen) {
                    return;
                }

                /*
                 * Si le clic est dans la navbar,
                 * on ne ferme pas.
                 */
                if (
                    event.target.closest(".navbar")
                ) {
                    return;
                }

                closeMenu();

            },
            false
        );


        /* =================================================
           TOUCHE ESCAPE
        ================================================= */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    isOpen
                ) {

                    closeMenu();

                    button.focus();
                }

            },
            false
        );


        /* =================================================
           REDIMENSIONNEMENT
        ================================================= */

        let resizeTimer = null;

        window.addEventListener(
            "resize",
            function () {

                clearTimeout(resizeTimer);

                resizeTimer =
                    setTimeout(
                        function () {

                            /*
                             * On ferme uniquement lorsque
                             * la fenêtre dépasse la largeur
                             * prévue pour le comportement mobile.
                             */
                            if (
                                window.innerWidth > 700 &&
                                isOpen
                            ) {
                                closeMenu();
                            }

                        },
                        100
                    );

            },
            false
        );


        /* =================================================
           CHANGEMENT D'ORIENTATION
        ================================================= */

        window.addEventListener(
            "orientationchange",
            function () {

                if (isOpen) {
                    closeMenu();
                }

            },
            false
        );


        /* =================================================
           CHARGEMENT INITIAL
        ================================================= */

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

        isOpen = false;


        console.log(
            "STORMLAB V2 : navbar chargée avec succès."
        );
    }


    /* =====================================================
       INITIALISATION
    ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initNavbar,
            {
                once: true
            }
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

        if (!images.length) {
            return;
        }

        images.forEach(
            function (image) {

                image.addEventListener(
                    "error",
                    function () {

                        image.classList.add(
                            "image-error"
                        );

                        console.warn(
                            "STORMLAB V2 : image introuvable :",
                            image.getAttribute("src")
                        );

                    },
                    {
                        once: true
                    }
                );

            }
        );
    }


    /* =====================================================
       INITIALISATION
    ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initImageFallback,
            {
                once: true
            }
        );

    } else {

        initImageFallback();

    }

})();


/* =========================================================
   STORMLAB V2 — LIENS INTERNES
========================================================= */

(function () {

    function initInternalLinks() {

        const links =
            document.querySelectorAll(
                'a[href]'
            );

        links.forEach(
            function (link) {

                const href =
                    link.getAttribute("href");

                /*
                 * Les liens externes, ancres,
                 * mailto, tel, etc. ne sont pas modifiés.
                 */
                if (
                    !href ||
                    href.startsWith("#") ||
                    href.startsWith("http://") ||
                    href.startsWith("https://") ||
                    href.startsWith("mailto:") ||
                    href.startsWith("tel:")
                ) {
                    return;
                }


                /*
                 * Lorsque l'utilisateur clique sur
                 * une page interne, le menu est fermé
                 * avant la navigation.
                 */
                link.addEventListener(
                    "click",
                    function () {

                        const navbar =
                            document.querySelector(".navbar");

                        const button =
                            document.getElementById(
                                "menuButton"
                            );

                        if (navbar) {
                            navbar.classList.remove(
                                "menu-open"
                            );
                        }

                        if (button) {

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

                    },
                    false
                );

            }
        );

    }


    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initInternalLinks,
            {
                once: true
            }
        );

    } else {

        initInternalLinks();

    }

})();


/* =========================================================
   STORMLAB V2 — PROTECTION DU BOUTON
========================================================= */

/*
 * Empêche certains éléments ou scripts de la page
 * de bloquer involontairement les interactions du bouton.
 */

(function () {

    function protectMenuButton() {

        const button =
            document.getElementById("menuButton");

        if (!button) {
            return;
        }

        button.style.pointerEvents = "auto";

        button.style.cursor = "pointer";

        button.style.touchAction =
            "manipulation";

        button.removeAttribute(
            "disabled"
        );

        button.removeAttribute(
            "aria-disabled"
        );

    }


    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            protectMenuButton,
            {
                once: true
            }
        );

    } else {

        protectMenuButton();

    }

})();
```
