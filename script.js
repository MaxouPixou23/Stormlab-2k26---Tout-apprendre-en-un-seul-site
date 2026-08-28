/* =========================================================
STORMLAB V2
GLOBAL JAVASCRIPT
NAVBAR + INTERACTIONS
========================================================= */

"use strict";

/* =========================================================
NAVBAR
========================================================= */

(function () {

```
function initNavbar() {

    const navbar =
        document.querySelector(".navbar");

    const button =
        document.getElementById("menuButton");

    const menu =
        document.getElementById("mainNav");


    /*
     * Si une page ne possède pas de navbar,
     * le script ne bloque pas le reste du site.
     */

    if (!navbar || !button || !menu) {

        console.warn(
            "STORMLAB V2 : navbar absente sur cette page."
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

        /*
         * Empêche le clic de traverser
         * vers les éléments derrière le menu.
         */

        menu.setAttribute(
            "aria-hidden",
            "false"
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

        menu.setAttribute(
            "aria-hidden",
            "true"
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
       BOUTON MENU
    ================================================= */

    button.addEventListener(
        "click",
        toggleMenu,
        false
    );


    /*
     * Empêche certains scripts/pages
     * de bloquer le bouton.
     */

    button.addEventListener(
        "pointerdown",
        function (event) {

            event.stopPropagation();

        },
        false
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
             * Laisse le navigateur suivre
             * normalement le href.
             */

            closeMenu();

        },
        false
    );


    /* =================================================
       CLIC EXTÉRIEUR
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

        },
        false
    );


    /* =================================================
       ESCAPE
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

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    function () {

                        /*
                         * On ferme le menu lorsque
                         * la fenêtre change fortement
                         * de taille.
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

        },
        false
    );


    /* =================================================
       TOUCH / MOBILE
    ================================================= */

    menu.addEventListener(
        "touchstart",
        function (event) {

            event.stopPropagation();

        },
        {
            passive: true
        }
    );


    /* =================================================
       ÉTAT INITIAL
    ================================================= */

    closeMenu();


    console.log(
        "STORMLAB V2 : navbar chargée."
    );

}


/* =====================================================
   DOM READY
===================================================== */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initNavbar
    );

} else {

    initNavbar();

}
```

})();

/* =========================================================
IMAGE FALLBACK
========================================================= */

(function () {

```
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
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initImageFallback
    );

} else {

    initImageFallback();

}
```

})();

/* =========================================================
ACTIVE PAGE
Détermine automatiquement le lien actif.
========================================================= */

(function () {

```
function initActivePage() {

    const links =
        document.querySelectorAll(
            ".menu-link"
        );


    if (!links.length) {

        return;

    }


    /*
     * Récupération de l'URL actuelle.
     */

    const currentPath =
        window.location.pathname
            .replace(/\\/g, "/")
            .split("/")
            .pop()
            .toLowerCase();


    links.forEach(
        function (link) {

            const href =
                link.getAttribute("href");


            if (!href) {

                return;

            }


            const linkPath =
                href
                    .split("/")
                    .pop()
                    .split("?")[0]
                    .toLowerCase();


            /*
             * On ne touche pas aux liens
             * qui pointent vers des ancres.
             */

            if (
                href.startsWith("#")
            ) {

                return;

            }


            link.classList.remove(
                "active"
            );


            if (
                linkPath ===
                currentPath
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initActivePage
    );

} else {

    initActivePage();

}
```

})();

/* =========================================================
PROTECTION DU MENU
========================================================= */

(function () {

```
/*
 * Certains éléments avec transform,
 * animation ou z-index peuvent créer
 * des problèmes de clic.
 *
 * On force la priorité de la navbar
 * lorsqu'elle est ouverte.
 */

function protectNavbar() {

    const navbar =
        document.querySelector(
            ".navbar"
        );


    if (!navbar) {

        return;

    }


    navbar.style.pointerEvents =
        "auto";


    const button =
        document.querySelector(
            "#menuButton"
        );


    const menu =
        document.querySelector(
            "#mainNav"
        );


    if (button) {

        button.style.pointerEvents =
            "auto";

    }


    if (menu) {

        menu.style.pointerEvents =
            "auto";

    }

}


if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        protectNavbar
    );

} else {

    protectNavbar();

}
```

})();
