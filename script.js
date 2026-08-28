document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const button = document.querySelector(".mobile-menu-btn");
    const menu = document.querySelector(".main-nav");

    if (!navbar || !button || !menu) {
        console.error("STORMLAB : éléments de navigation introuvables.");
        return;
    }

    button.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        navbar.classList.toggle("menu-open");

        const opened = navbar.classList.contains("menu-open");

        button.textContent = opened ? "✕" : "☰";
        button.setAttribute(
            "aria-expanded",
            opened ? "true" : "false"
        );

        button.setAttribute(
            "aria-label",
            opened ? "Fermer le menu" : "Ouvrir le menu"
        );

        document.body.classList.toggle("menu-active", opened);

    });


    menu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("menu-open");
            button.textContent = "☰";
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Ouvrir le menu");

            document.body.classList.remove("menu-active");

        });

    });


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navbar.classList.remove("menu-open");

            button.textContent = "☰";
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Ouvrir le menu");

            document.body.classList.remove("menu-active");

        }

    });

});
