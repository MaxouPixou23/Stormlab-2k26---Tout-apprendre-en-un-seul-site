```javascript
/* =========================================================
   STORMLAB V2
   JAVASCRIPT GLOBAL
========================================================= */

"use strict";


/* =========================================================
   NAVBAR
========================================================= */

(function () {

    function initNavbar() {

        const navbar =
            document.querySelector(".navbar");

        const button =
            document.getElementById("menuButton");

        const menu =
            document.getElementById("mainNav");


        /* -------------------------------------------------
           Vérification
        ------------------------------------------------- */

        if (!navbar || !button || !menu) {

            console.warn(
                "STORMLAB V2 : éléments navbar introuvables."
            );

            return;
        }


        /* -------------------------------------------------
           OUVRIR LE MENU
        ------------------------------------------------- */

        function openMenu() {

            navbar.classList.add(
                "menu-open"
            );

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


        /* -------------------------------------------------
           FERMER LE MENU
        ------------------------------------------------- */

        function closeMenu() {

            navbar.classList.remove(
                "menu-open"
            );

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


        /* -------------------------------------------------
           TOGGLE
        ------------------------------------------------- */

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


        /* -------------------------------------------------
           BOUTON MENU
        ------------------------------------------------- */

        button.addEventListener(
            "click",
            toggleMenu
        );


        /* -------------------------------------------------
           LIENS
           
           IMPORTANT :
           aucun preventDefault().
           Le href reste totalement fonctionnel.
        ------------------------------------------------- */

        menu
            .querySelectorAll(
                "a.menu-link"
            )
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            closeMenu();

                        }
                    );

                }
            );


        /* -------------------------------------------------
           LOGO
        ------------------------------------------------- */

        const logo =
            navbar.querySelector(
                "a.logo"
            );

        if (logo) {

            logo.addEventListener(
                "click",
                function () {

                    closeMenu();

                }
            );
        }


        /* -------------------------------------------------
           CLIC EN DEHORS
        ------------------------------------------------- */

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


        /* -------------------------------------------------
           TOUCHE ESCAPE
        ------------------------------------------------- */

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


        /* -------------------------------------------------
           REDIMENSIONNEMENT
        ------------------------------------------------- */

        let resizeTimer = null;

        window.addEventListener(
            "resize",
            function () {

                clearTimeout(
                    resizeTimer
                );

                resizeTimer =
                    setTimeout(
                        function () {

                            /*
                             * On ferme le menu pendant
                             * un changement important
                             * de taille d'écran.
                             */

                            if (
                                navbar.classList.contains(
                                    "menu-open"
                                )
                            ) {

                                closeMenu();
                            }

                        },
                        120
                    );
            }
        );


        /* -------------------------------------------------
           ÉTAT INITIAL
        ------------------------------------------------- */

        closeMenu();


        console.log(
            "STORMLAB V2 : navbar opérationnelle."
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
            initNavbar
        );

    } else {

        initNavbar();
    }

})();


/* =========================================================
   FALLBACK DES IMAGES
========================================================= */

(function () {

    function initImageFallback() {

        const images =
            document.querySelectorAll(
                "img"
            );

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


/* =========================================================
   ANIMATION DES IMAGES AU CHARGEMENT
========================================================= */

(function () {

    function initImageReveal() {

        const images =
            document.querySelectorAll(
                "img"
            );

        images.forEach(
            function (image) {

                if (
                    image.complete &&
                    image.naturalWidth > 0
                ) {

                    image.classList.add(
                        "image-loaded"
                    );

                    return;
                }

                image.addEventListener(
                    "load",
                    function () {

                        image.classList.add(
                            "image-loaded"
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
            initImageReveal
        );

    } else {

        initImageReveal();
    }

})();
```
