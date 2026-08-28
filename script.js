"use strict";

/* =========================================================
STORMLAB V2
SCRIPT GLOBAL
NAVBAR UNIVERSELLE
========================================================= */

(function () {

```
function initNavbar() {

    const navbar = document.querySelector(".navbar");
    const button = document.getElementById("menuButton");
    const menu = document.getElementById("mainNav");

    if (!navbar || !button || !menu) {
        console.warn("STORMLAB : navbar absente sur cette page.");
        return;
    }

    function openMenu() {

        navbar.classList.add("menu-open");

        button.textContent = "✕";
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Fermer le menu");

        document.body.classList.add("nav-open");
    }

    function closeMenu() {

        navbar.classList.remove("menu-open");

        button.textContent = "☰";
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Ouvrir le menu");

        document.body.classList.remove("nav-open");
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

        const link = event.target.closest(".menu-link");

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

        if (
            event.key === "Escape" &&
            navbar.classList.contains("menu-open")
        ) {

            closeMenu();
            button.focus();

        }

    });


    window.addEventListener("resize", function () {

        if (window.innerWidth > 700) {
            closeMenu();
        }

    });


    /* =================================================
       PAGE ACTIVE AUTOMATIQUE
    ================================================= */

    let currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

    if (!currentPage) {
        currentPage = "index.html";
    }


    const links =
        menu.querySelectorAll(".menu-link");


    links.forEach(function (link) {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (!href) {
            return;
        }

        const targetPage =
            href
                .split("/")
                .pop()
                .split("?")[0]
                .split("#")[0]
                .toLowerCase();

        if (targetPage === currentPage) {
            link.classList.add("active");
        }

    });


    closeMenu();

    console.log(
        "STORMLAB V2 : navbar universelle OK."
    );

}


if (document.readyState === "loading") {

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
function initImages() {

    const images =
        document.querySelectorAll("img");


    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                image.classList.add("image-error");

                console.warn(
                    "STORMLAB : image introuvable :",
                    image.src
                );

            },
            {
                once: true
            }
        );

    });

}


if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initImages
    );

} else {

    initImages();

}
```

})();
