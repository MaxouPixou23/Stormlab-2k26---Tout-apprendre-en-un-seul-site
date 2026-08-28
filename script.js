/* =========================================================
   STORMLAB V2 — NAVIGATION
========================================================= */

(() => {

    "use strict";


    function initStormlabMenu() {

        const navbar = document.querySelector(".navbar");
        const button = document.getElementById("menuButton");
        const menu = document.getElementById("mainNav");


        if (!navbar || !button || !menu) {

            console.error(
                "STORMLAB : navbar, menuButton ou mainNav introuvable."
            );

            return;
        }


        console.log("STORMLAB V2 : navigation initialisée");


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
           BOUTON
        ================================================= */

        button.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            if (
                navbar.classList.contains("menu-open")
            ) {

                closeMenu();

            } else {

                openMenu();

            }

        });


        /* =================================================
           LIENS
        ================================================= */

        menu.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                closeMenu();

            });

        });


        /* =================================================
           ESC
        ================================================= */

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                closeMenu();

            }

        });


        /* =================================================
           CLIC EN DEHORS
        ================================================= */

        document.addEventListener("click", (event) => {

            if (!navbar.classList.contains("menu-open")) {

                return;

            }


            if (!navbar.contains(event.target)) {

                closeMenu();

            }

        });


        /* =================================================
           INITIALISATION
        ================================================= */

        closeMenu();

    }


    /* =====================================================
       LANCEMENT
    ===================================================== */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initStormlabMenu
        );

    } else {

        initStormlabMenu();

    }

})();
