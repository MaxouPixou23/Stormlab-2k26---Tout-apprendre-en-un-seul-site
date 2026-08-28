/* =========================================================
   STORMLAB V2 — NAVBAR
========================================================= */

(function () {

    "use strict";

    function initNavbar() {

        const navbar =
            document.querySelector(".navbar");

        const button =
            document.getElementById("menuButton");

        const menu =
            document.getElementById("mainNav");


        if (!navbar || !button || !menu) {

            console.error(
                "STORMLAB : navbar introuvable."
            );

            return;
        }


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


        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

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
        );


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


        document.addEventListener(
            "click",
            function (event) {

                if (
                    navbar.classList.contains(
                        "menu-open"
                    ) &&
                    !navbar.contains(event.target)
                ) {

                    closeMenu();

                }

            }
        );


        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {

                    closeMenu();

                }

            }
        );


        closeMenu();

        console.log(
            "STORMLAB V2 : navbar opérationnelle."
        );

    }


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

})();
