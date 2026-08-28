/* =========================================================
STORMLAB V2 — ADMIN LOGIN
LOGIN.JS
========================================================= */

(function () {

```
"use strict";


/* =====================================================
   ELEMENTS
===================================================== */

const form =
    document.getElementById("loginForm");

const username =
    document.getElementById("username");

const password =
    document.getElementById("password");

const button =
    document.getElementById("loginButton");

const message =
    document.getElementById("loginMessage");

const togglePassword =
    document.getElementById("togglePassword");


if (
    !form ||
    !username ||
    !password ||
    !button ||
    !message
) {

    console.error(
        "STORMLAB : système de connexion introuvable."
    );

    return;
}


/* =====================================================
   MESSAGE
===================================================== */

function showMessage(
    text,
    type = "error"
) {

    message.textContent = text;

    message.className =
        "login-message " + type;

}


function clearMessage() {

    message.textContent = "";

    message.className =
        "login-message";

}


/* =====================================================
   AFFICHER / MASQUER MOT DE PASSE
===================================================== */

if (togglePassword) {

    togglePassword.addEventListener(
        "click",
        function () {

            const isPassword =
                password.type === "password";

            password.type =
                isPassword
                    ? "text"
                    : "password";

            togglePassword.textContent =
                isPassword
                    ? "🙈"
                    : "👁️";

            togglePassword.setAttribute(
                "aria-label",
                isPassword
                    ? "Masquer le mot de passe"
                    : "Afficher le mot de passe"
            );

        }
    );

}


/* =====================================================
   ÉTAT DE CHARGEMENT
===================================================== */

function setLoading(
    loading
) {

    button.disabled =
        loading;

    if (loading) {

        button.textContent =
            "⏳ Connexion...";

    } else {

        button.textContent =
            "🚀 Se connecter";

    }

}


/* =====================================================
   CONNEXION
===================================================== */

form.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();

        clearMessage();


        const user =
            username.value.trim();

        const pass =
            password.value;


        if (!user) {

            showMessage(
                "⚠️ Veuillez entrer votre identifiant."
            );

            username.focus();

            return;
        }


        if (!pass) {

            showMessage(
                "⚠️ Veuillez entrer votre mot de passe."
            );

            password.focus();

            return;
        }


        setLoading(true);


        /*
         * =================================================
         * CONNEXION SERVEUR
         *
         * L'URL /api/admin/login sera fournie
         * par le backend STORMLAB.
         * =================================================
         */

        try {

            const response =
                await fetch(
                    "/api/admin/login",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        credentials: "include",

                        body:
                            JSON.stringify({
                                username: user,
                                password: pass
                            })
                    }
                );


            let data = {};

            try {

                data =
                    await response.json();

            } catch {

                data = {};

            }


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Identifiant ou mot de passe incorrect."
                );

            }


            showMessage(
                "✅ Connexion réussie ! Redirection...",
                "success"
            );


            /*
             * Petite pause pour afficher
             * le message de réussite.
             */

            setTimeout(
                function () {

                    window.location.href =
                        "index.html";

                },
                600
            );


        } catch (error) {

            console.error(
                "STORMLAB LOGIN:",
                error
            );


            showMessage(
                "❌ " +
                (
                    error.message ||
                    "Impossible de se connecter."
                )
            );


            setLoading(false);

            password.focus();

        }

    }
);


/* =====================================================
   RACCOURCI ENTRÉE
===================================================== */

username.addEventListener(
    "input",
    clearMessage
);

password.addEventListener(
    "input",
    clearMessage
);


console.log(
    "STORMLAB : système de connexion chargé."
);
```

})();
