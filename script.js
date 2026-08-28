/* =========================================================
   STORMLAB V2 — MENU PRINCIPAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const menuButton = document.getElementById("menuButton");
    const mainNav = document.getElementById("mainNav");

    if (!navbar || !menuButton || !mainNav) {
        console.error("STORMLAB : éléments de navigation introuvables.");
        return;
    }


    function openMenu() {

        navbar.classList.add("menu-open");

        document.body.classList.add("menu-active");

        menuButton.textContent = "✕";

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.setAttribute(
            "aria-label",
            "Fermer le menu"
        );
    }


    function closeMenu() {

        navbar.classList.remove("menu-open");

        document.body.classList.remove("menu-active");

        menuButton.textContent = "☰";

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Ouvrir le menu"
        );
    }


    function toggleMenu(event) {

        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (navbar.classList.contains("menu-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    }


    /* =====================================================
       BOUTON ☰
    ===================================================== */

    menuButton.addEventListener(
        "click",
        toggleMenu
    );


    /* =====================================================
       LIENS
    ===================================================== */

    const links = mainNav.querySelectorAll("a");

    links.forEach((link) => {

        link.addEventListener("click", () => {
            closeMenu();
        });

    });


    /* =====================================================
       ÉCHAP
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
       ÉTAT INITIAL
    ===================================================== */

    closeMenu();

    console.log("STORMLAB V2 : menu chargé correctement.");

});
