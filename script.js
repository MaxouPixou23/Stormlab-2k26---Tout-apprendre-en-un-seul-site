```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       JAVASCRIPT ACTIVÉ
    ========================================= */

    document.documentElement.classList.add("js-enabled");


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

        updateNavbar();

        window.addEventListener(
            "scroll",
            updateNavbar,
            { passive: true }
        );

    }


    /* =========================================
       ANIMATIONS AU SCROLL
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

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

        revealElements.forEach(element => {
            observer.observe(element);
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

    const closeButton =
        document.querySelector(".mobile-close");

    const overlay =
        document.querySelector(".menu-overlay");


    const openMenu = () => {

        if (!mobileMenu) return;

        mobileMenu.classList.add("open");

        if (overlay) {
            overlay.classList.add("open");
        }

        document.body.classList.add("menu-open");

        if (menuButton) {
            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );
        }

        mobileMenu.setAttribute(
            "aria-hidden",
            "false"
        );

    };


    const closeMenu = () => {

        if (!mobileMenu) return;

        mobileMenu.classList.remove("open");

        if (overlay) {
            overlay.classList.remove("open");
        }

        document.body.classList.remove("menu-open");

        if (menuButton) {
            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }

        mobileMenu.setAttribute(
            "aria-hidden",
            "true"
        );

    };


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            openMenu
        );

    }


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeMenu
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeMenu
        );

    }


    /* =========================================
       LIENS DU MENU MOBILE
       
       IMPORTANT :
       Les catégories ne sont jamais supprimées.
       Le menu se ferme uniquement après navigation.
    ========================================= */

    if (mobileMenu) {

        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    closeMenu();

                }
            );

        });

    }


    /* =========================================
       TOUCHE ESCAPE
    ========================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeMenu();
            }

        }
    );


    /* =========================================
       ANNÉE AUTOMATIQUE
    ========================================= */

    const currentYear =
        new Date().getFullYear();

    document
        .querySelectorAll(".copyright")
        .forEach(element => {

            element.textContent =
                `© ${currentYear} STORMLAB`;

        });


    /* =========================================
       EMPÊCHE LE RECHARGEMENT/COMPORTEMENT
       ÉTRANGE DES ANCRES VIDES
    ========================================= */

    document
        .querySelectorAll('a[href="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {
                    event.preventDefault();
                }
            );

        });

});
```
