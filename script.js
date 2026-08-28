```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       NAVBAR AU SCROLL
    ========================================= */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        const updateNavbar = () => {

            if (window.scrollY > 40) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        };

        window.addEventListener(
            "scroll",
            updateNavbar,
            { passive: true }
        );

        updateNavbar();
    }


    /* =========================================
       ANIMATIONS AU SCROLL
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if (
        "IntersectionObserver" in window &&
        revealElements.length > 0
    ) {

        const revealObserver =
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
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    /* =========================================
       MENU MOBILE
    ========================================= */

    const menuButton =
        document.querySelector(".mobile-menu-btn");

    const mobileMenu =
        document.querySelector(".mobile-menu");


    if (menuButton && mobileMenu) {

        const closeMenu = () => {

            mobileMenu.classList.remove("open");

            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        };


        const openMenu = () => {

            mobileMenu.classList.add("open");

            menuButton.classList.add("active");

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

            document.body.classList.add(
                "menu-open"
            );

        };


        menuButton.addEventListener("click", () => {

            const isOpen =
                mobileMenu.classList.contains("open");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        });


        /* Fermer après clic sur un lien */

        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    closeMenu
                );

            });


        /* Fermer avec Échap */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape" &&
                    mobileMenu.classList.contains("open")
                ) {
                    closeMenu();
                }

            }
        );


        /* Fermer si on clique en dehors */

        document.addEventListener(
            "click",
            event => {

                if (
                    mobileMenu.classList.contains("open") &&
                    !mobileMenu.contains(event.target) &&
                    !menuButton.contains(event.target)
                ) {
                    closeMenu();
                }

            }
        );


        /* Fermer si retour sur écran PC */

        window.addEventListener(
            "resize",
            () => {

                if (window.innerWidth > 780) {
                    closeMenu();
                }

            }
        );

    }


    /* =========================================
       ANNÉE AUTOMATIQUE
    ========================================= */

    const year =
        new Date().getFullYear();

    document
        .querySelectorAll(".copyright")
        .forEach(element => {

            element.textContent =
                `© ${year} STORMLAB`;

        });


    /* =========================================
       PARALLAXE HERO
    ========================================= */

    const heroSymbol =
        document.querySelector(".hero-symbol");


    if (
        heroSymbol &&
        !window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        let ticking = false;

        window.addEventListener(
            "scroll",
            () => {

                if (!ticking) {

                    window.requestAnimationFrame(
                        () => {

                            const offset =
                                window.scrollY * 0.08;

                            heroSymbol.style.transform =
                                `translateY(${offset}px)`;

                            ticking = false;

                        }
                    );

                    ticking = true;
                }

            },
            { passive: true }
        );

    }


    /* =========================================
       GESTION DES IMAGES MANQUANTES
    ========================================= */

    document
        .querySelectorAll("img")
        .forEach(image => {

            image.addEventListener(
                "error",
                () => {

                    image.classList.add(
                        "image-error"
                    );

                }
            );

        });

});
```
