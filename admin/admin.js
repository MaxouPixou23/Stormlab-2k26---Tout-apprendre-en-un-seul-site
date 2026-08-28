# /*

# STORMLAB V2 — ADMIN CORE

*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {

```
if (typeof protectPage === "function") {
    protectPage();
}

setupLogout();

setupSidebar();

updateDashboard();

setupReset();
```

});

# /*

# LOGOUT

*/

function setupLogout() {

```
const buttons =
    document.querySelectorAll(
        "[data-logout]"
    );

buttons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            if (
                confirm(
                    "Voulez-vous vraiment vous déconnecter ?"
                )
            ) {

                logout();

            }

        }
    );

});
```

}

# /*

# SIDEBAR

*/

function setupSidebar() {

```
const toggle =
    document.getElementById(
        "sidebarToggle"
    );

const sidebar =
    document.getElementById(
        "adminSidebar"
    );

if (!toggle || !sidebar) {
    return;
}

toggle.addEventListener(
    "click",
    () => {

        sidebar.classList.toggle(
            "open"
        );

    }
);
```

}

# /*

# DASHBOARD

*/

function updateDashboard() {

```
const counters = {

    chasseurs:
        document.getElementById(
            "countChasseurs"
        ),

    actualites:
        document.getElementById(
            "countActualites"
        ),

    alertes:
        document.getElementById(
            "countAlertes"
        ),

    galerie:
        document.getElementById(
            "countGalerie"
        ),

    videos:
        document.getElementById(
            "countVideos"
        )

};


Object.entries(counters)
    .forEach(([type, element]) => {

        if (element) {

            element.textContent =
                countItems(type);

        }

    });
```

}

# /*

# RESET

*/

function setupReset() {

```
const button =
    document.getElementById(
        "resetData"
    );

if (!button) {
    return;
}

button.addEventListener(
    "click",
    () => {

        const confirmed =
            confirm(
                "Réinitialiser toutes les données STORMLAB ?"
            );

        if (!confirmed) {
            return;
        }

        resetData();

        alert(
            "Les données ont été réinitialisées."
        );

        window.location.reload();

    }
);
```

}
