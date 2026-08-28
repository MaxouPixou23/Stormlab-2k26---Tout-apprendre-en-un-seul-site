<!DOCTYPE html>

<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

```
<meta name="theme-color" content="#03060d">

<title>STORMLAB — Administration</title>

<link rel="stylesheet" href="admin.css">
```

</head>

<body>

```
<main class="login-page">

    <section class="login-card">

        <div class="login-logo">
            <span>🌪️</span>
            <div>
                <strong>STORMLAB</strong>
                <small>ADMINISTRATION</small>
            </div>
        </div>


        <div class="login-header">

            <p class="eyebrow">
                🔐 ESPACE SÉCURISÉ
            </p>

            <h1>
                Connexion
                <span>Admin.</span>
            </h1>

            <p>
                Connecte-toi pour accéder au
                panneau d'administration STORMLAB.
            </p>

        </div>


        <form
            id="loginForm"
            class="login-form"
            autocomplete="on">

            <div class="form-group">

                <label
                    class="form-label"
                    for="username">
                    👤 Identifiant
                </label>

                <input
                    id="username"
                    name="username"
                    class="form-input"
                    type="text"
                    placeholder="Votre identifiant"
                    autocomplete="username"
                    required>

            </div>


            <div class="form-group">

                <label
                    class="form-label"
                    for="password">
                    🔒 Mot de passe
                </label>

                <div class="password-wrapper">

                    <input
                        id="password"
                        name="password"
                        class="form-input"
                        type="password"
                        placeholder="Votre mot de passe"
                        autocomplete="current-password"
                        required>

                    <button
                        id="togglePassword"
                        class="password-toggle"
                        type="button"
                        aria-label="Afficher le mot de passe">
                        👁️
                    </button>

                </div>

            </div>


            <div
                id="loginMessage"
                class="login-message"
                role="alert"
                aria-live="polite">
            </div>


            <button
                id="loginButton"
                class="admin-btn primary login-button"
                type="submit">

                🚀 Se connecter

            </button>

        </form>


        <div class="login-security">

            <span>🛡️</span>

            <div>
                <strong>Zone protégée</strong>
                <small>
                    Accès réservé aux administrateurs STORMLAB
                </small>
            </div>

        </div>


        <div class="login-footer">

            <span>🌪️ STORMLAB V2</span>

            <span>NEVER STOP CHASING</span>

        </div>

    </section>

</main>


<script src="login.js"></script>
```

</body>

</html>

