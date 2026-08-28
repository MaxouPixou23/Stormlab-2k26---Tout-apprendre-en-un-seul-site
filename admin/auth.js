# /*

# STORMLAB V2 — AUTHENTIFICATION ADMIN

*/

"use strict";

/*
Démonstration uniquement.

```
Pour une vraie production :
- ne jamais stocker le mot de passe dans JS ;
- utiliser une API serveur ;
- utiliser une session sécurisée ;
- utiliser HTTPS.
```

*/

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "stormlab";

const SESSION_KEY = "stormlab_admin_session";

function createSession() {

```
sessionStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
        authenticated: true,
        loginTime: Date.now()
    })
);
```

}

function isAuthenticated() {

```
const session =
    sessionStorage.getItem(SESSION_KEY);

if (!session) {
    return false;
}

try {

    const data = JSON.parse(session);

    return data.authenticated === true;

} catch {

    sessionStorage.removeItem(SESSION_KEY);

    return false;

}
```

}

function logout() {

```
sessionStorage.removeItem(SESSION_KEY);

window.location.href = "index.html";
```

}

function protectPage() {

```
if (!isAuthenticated()) {

    window.location.href = "index.html";

}
```

}

document.addEventListener("DOMContentLoaded", () => {

```
const loginForm =
    document.getElementById("loginForm");

if (!loginForm) {
    return;
}

if (isAuthenticated()) {

    window.location.href =
        "dashboard.html";

    return;

}

loginForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const username =
            document
                .getElementById("username")
                .value
                .trim();

        const password =
            document
                .getElementById("password")
                .value;

        const message =
            document.getElementById(
                "loginMessage"
            );


        if (
            username === ADMIN_USERNAME &&
            password === ADMIN_PASSWORD
        ) {

            createSession();

            message.textContent =
                "Connexion réussie...";

            message.className =
                "login-message success";

            setTimeout(() => {

                window.location.href =
                    "dashboard.html";

            }, 300);

        } else {

            message.textContent =
                "Identifiant ou mot de passe incorrect.";

            message.className =
                "login-message error";

        }

    }
);
```

});

