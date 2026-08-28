/* =========================================================
   STORMLAB V2
   SCRIPT NAVIGATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const menuButton = document.getElementById("menuButton");
    const mainNav = document.getElementById("mainNav");

    /* Vérification */
    if (!navbar) {
        console.error("STORMLAB : .navbar introuvable.");
        return;
    }

    if (!menuButton) {
        console.error("STORMLAB : #menuButton introuvable.");
        return;
    }

    if (!mainNav) {
        console.error("STORMLAB : #mainNav introuvable.");
        return;
    }


    /* =====================================================
       OUVRIR / FERMER LE MENU
    ===================================================== */

    function toggleMenu() {

        const isOpen = navbar.classList.contains("menu-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }


    function openMenu() {

        navbar.classList.add("menu-open");

        menuButton.textContent = "✕";

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.setAttribute(
            "aria-label",
            "Fermer le menu"
        );

        document.body.classList.add("menu-active");
    }


    function closeMenu() {

        navbar.classList.remove("menu-open");

        menuButton.textContent = "☰";

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Ouvrir le menu"
        );

        document.body.classList.remove("menu-active");
    }


    /* =====================================================
       BOUTON ☰
    ===================================================== */

    menuButton.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        toggleMenu();

    });


    /* =====================================================
       LIENS DU MENU
    ===================================================== */

    const links = mainNav.querySelectorAll("a");

    links.forEach((link) => {

        link.addEventListener("click", () => {

            closeMenu();

        });

    });


    /* =====================================================
       TOUCHE ESC
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeMenu();

        }

    });


    /* =====================================================
       CLIC EN DEHORS
    ===================================================== */

    document.addEventListener("click", (event) => {

        if (!navbar.classList.contains("menu-open")) {
            return;
        }

        if (!navbar.contains(event.target)) {

            closeMenu();

        }

    });


    /* =====================================================
       INITIALISATION
    ===================================================== */

    closeMenu();

    console.log("STORMLAB V2 : navigation chargée.");

});
