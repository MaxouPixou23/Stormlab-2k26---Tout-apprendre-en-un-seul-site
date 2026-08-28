/* =========================================================
   STORMLAB V2 — MENU
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const button = document.getElementById("menuButton");
    const menu = document.getElementById("mainNav");

    if (!navbar || !button || !menu) {
        console.error("STORMLAB : éléments de navigation introuvables.");
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

        document.body.classList.add("menu-active");
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

        document.body.classList.remove("menu-active");
    }


    button.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        if (navbar.classList.contains("menu-open")) {
            closeMenu();
        } else {
            openMenu();
        }

    });


    menu.addEventListener("click", function (event) {

        const link = event.target.closest("a");

        if (!link) {
            return;
        }

        closeMenu();

    });


    document.addEventListener("click", function (event) {

        if (!navbar.classList.contains("menu-open")) {
            return;
        }

        if (!navbar.contains(event.target)) {
            closeMenu();
        }

    });


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeMenu();
        }

    });


    window.addEventListener("resize", function () {

        if (window.innerWidth <= 700) {
            return;
        }

        closeMenu();

    });


    closeMenu();

    console.log("STORMLAB V2 : menu chargé.");

});
