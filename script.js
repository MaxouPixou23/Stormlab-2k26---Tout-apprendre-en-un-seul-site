document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const button = document.getElementById("menuButton");
    const menu = document.getElementById("mainNav");

    if (!navbar || !button || !menu) {
        console.error("STORMLAB : navbar introuvable.");
        return;
    }

    button.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        navbar.classList.toggle("menu-open");

        const open = navbar.classList.contains("menu-open");

        button.textContent = open ? "✕" : "☰";

        button.setAttribute(
            "aria-expanded",
            open ? "true" : "false"
        );

        button.setAttribute(
            "aria-label",
            open ? "Fermer le menu" : "Ouvrir le menu"
        );

    });

    menu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

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

        });

    });

});
