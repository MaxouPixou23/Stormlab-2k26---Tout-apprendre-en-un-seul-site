/* =========================================
   STORMLAB V2 — SCRIPT PRINCIPAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       MENU HAMBURGER
    ===================================== */

    const menuButton = document.querySelector(".mobile-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", (event) => {

            event.stopPropagation();

            const isOpen =
                mobileMenu.classList.toggle("open");

            menuButton.classList.toggle("active", isOpen);

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Fermer le menu"
                    : "Ouvrir le menu"
            );

        });


        /* Fermer après avoir choisi une catégorie */

        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");

                menuButton.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Ouvrir le menu"
                );

            });

        });


        /* Fermer en cliquant à l'extérieur */

        document.addEventListener("click", (event) => {

            if (
                mobileMenu.classList.contains("open") &&
                !mobileMenu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                mobileMenu.classList.remove("open");

                menuButton.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Ouvrir le menu"
                );

            }

        });


        /* Fermer avec Échap */

        document.addEventListener("keydown", (event) => {

            if (
                event.key === "Escape" &&
                mobileMenu.classList.contains("open")
            ) {

                mobileMenu.classList.remove("open");

                menuButton.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Ouvrir le menu"
                );

                menuButton.focus();

            }

        });

    }


    /* =====================================
       NAVBAR AU SCROLL
    ===================================== */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        const updateNavbar = () => {

            if (window.scrollY > 40) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        };

        updateNavbar();

        window.addEventListener(
            "scroll",
            updateNavbar,
            { passive: true }
        );

    }


    /* =====================================
       ANIMATIONS AU DÉFILEMENT
    ===================================== */

    const animatedElements =
        document.querySelectorAll(
            ".card, .section-title, .storm-feature, .manual, .chasing"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(element => {

            observer.observe(element);

        });

    } else {

        /* Compatibilité navigateurs anciens */

        animatedElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =====================================
       ANNÉE AUTOMATIQUE
    ===================================== */

    document
        .querySelectorAll(".copyright")
        .forEach(element => {

            element.textContent =
                `© ${new Date().getFullYear()} STORMLAB`;

        });


    /* =====================================
       LIEN ACTIF
    ===================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    document
        .querySelectorAll(
            ".main-nav a, .mobile-menu a"
        )
        .forEach(link => {

            const linkPage =
                link.getAttribute("href");

            if (!linkPage) return;

            const cleanLink =
                linkPage
                    .split("/")
                    .pop()
                    .toLowerCase();

            if (
                cleanLink === currentPage ||
                (
                    currentPage === "" &&
                    cleanLink === "index.html"
                )
            ) {

                link.classList.add("active");

            }

        });


    /* =====================================
       EMPÊCHER LES LIENS CASSÉS
    ===================================== */

    document
        .querySelectorAll("a[href]")
        .forEach(link => {

            link.addEventListener("click", () => {

                link.classList.add("clicked");

                setTimeout(() => {

                    link.classList.remove("clicked");

                }, 300);

            });

        });


    /* =====================================
       CHARGEMENT TERMINÉ
    ===================================== */

    document.body.classList.add("loaded");

});
