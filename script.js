```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =================================
       NAVBAR AU SCROLL
    ================================= */

    const navbar = document.querySelector(".navbar");

    const updateNavbar = () => {

        if (!navbar) return;

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


    /* =================================
       MENU MOBILE
    ================================= */

    const menuButton =
        document.querySelector(".mobile-menu-btn");

    const mobileMenu =
        document.querySelector(".mobile-menu");


    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                mobileMenu.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.textContent =
                isOpen ? "✕" : "☰";

        });


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    mobileMenu.classList.remove("open");

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuButton.textContent = "☰";

                });

            });


        document.addEventListener("click", event => {

            if (
                mobileMenu.classList.contains("open") &&
                !mobileMenu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                mobileMenu.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.textContent = "☰";

            }

        });

    }


    /* =================================
       ANIMATION DES CARTES
    ================================= */

    const animatedElements =
        document.querySelectorAll(
            ".feature-card, " +
            ".phenomenon-card, " +
            ".chaser-card, " +
            ".experience-card, " +
            ".section-heading"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

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
                    threshold: 0.12
                }
            );


        animatedElements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }


    /* =================================
       ANNÉE AUTOMATIQUE
    ================================= */

    document
        .querySelectorAll(".copyright")
        .forEach(element => {

            element.textContent =
                `© ${new Date().getFullYear()} STORMLAB`;

        });


    /* =================================
       FERMER LE MENU AVEC ESC
    ================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                mobileMenu &&
                mobileMenu.classList.contains("open")
            ) {

                mobileMenu.classList.remove("open");

                if (menuButton) {

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuButton.textContent = "☰";

                }

            }

        }
    );

});
```
