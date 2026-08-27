// ==========================================
// STORMLAB — INTERACTIONS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // Animation d'apparition des cartes
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }

            });
        },
        {
            threshold: 0.15
        }
    );

    cards.forEach((card) => {
        observer.observe(card);
    });


    // Effet léger de déplacement du symbole de tempête
    const stormSymbol = document.querySelector(".hero-symbol");

    if (stormSymbol) {

        document.addEventListener("mousemove", (event) => {

            const x = (window.innerWidth / 2 - event.clientX) / 80;
            const y = (window.innerHeight / 2 - event.clientY) / 80;

            stormSymbol.style.transform =
                `translate(${x}px, ${y}px) rotate(4deg)`;

        });

    }


    // Fermer les menus déroulants avec la touche Échap
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                menu.style.opacity = "";
                menu.style.visibility = "";
            });

        }

    });

});
