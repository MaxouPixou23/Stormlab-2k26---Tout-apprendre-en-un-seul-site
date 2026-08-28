```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       NAVBAR
    ========================================= */

    const navbar =
        document.querySelector(".navbar");


    if (navbar) {

        const updateNavbar = () => {

            if (window.scrollY > 40) {

                navbar.classList.add(
                    "scrolled"
                );

            } else {

                navbar.classList.remove(
                    "scrolled"
                );

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
       ANIMATIONS
    ========================================= */

    const elements =
        document.querySelectorAll(".reveal");


    if (
        "IntersectionObserver" in window &&
        elements.length
    ) {

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        elements.forEach(element => {

            observer.observe(element);

        });

    } else {

        elements.forEach(element => {

            element.classList.add(
                "visible"
            );

        });

    }


    /* =========================================
       MENU MOBILE
    ========================================= */

    const menuButton =
        document.querySelector(
            ".mobile-menu-btn"
        );

    const mobileMenu =
        document.querySelector(
            ".mobile-menu"
        );


    if (
        menuButton &&
        mobileMenu
    ) {

        const closeMenu = () => {

            mobileMenu.classList.remove(
                "open"
            );

            menuButton.classList.remove(
                "active"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        };


        const openMenu = () => {

            mobileMenu.classList.add(
                "open"
            );

            menuButton.classList.add(
                "active"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

            document.body.classList.add(
                "menu-open"
            );

        };


        menuButton.addEventListener(
            "click",
            () => {

                if (
                    mobileMenu.classList.contains(
                        "open"
                    )
                ) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    closeMenu
                );

            });


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    closeMenu();

                }

            }
        );


        document.addEventListener(
            "click",
            event => {

                if (
                    mobileMenu.classList.contains(
                        "open"
                    ) &&
                    !mobileMenu.contains(
                        event.target
                    ) &&
                    !menuButton.contains(
                        event.target
                    )
                ) {

                    closeMenu();

                }

            }
        );


        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth > 780
                ) {

                    closeMenu();

                }

            }
        );

    }


    /* =========================================
       ANNÉE
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
       IMAGES
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

                    image.alt =
                        "Image STORMLAB indisponible";

                }
            );

        });


    /* =========================================
       PARALLAXE DU SYMBOLE
    ========================================= */

    const heroSymbol =
        document.querySelector(
            ".hero-symbol"
        );


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (
        heroSymbol &&
        !reducedMotion
    ) {

        let ticking = false;


        window.addEventListener(
            "scroll",
            () => {

                if (ticking) return;


                window.requestAnimationFrame(
                    () => {

                        const offset =
                            window.scrollY * 0.06;


                        heroSymbol.style.transform =
                            `translateY(${offset}px)`;


                        ticking = false;

                    }
                );


                ticking = true;

            },
            { passive: true }
        );

    }

});
```
