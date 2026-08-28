/* =========================================================
   STORMLAB — ADMIN PANEL V1
   ADMIN.CSS
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    background:
        radial-gradient(
            circle at 15% 10%,
            rgba(0, 217, 255, .12),
            transparent 30%
        ),
        radial-gradient(
            circle at 85% 20%,
            rgba(124, 77, 255, .14),
            transparent 32%
        ),
        radial-gradient(
            circle at 50% 100%,
            rgba(35, 136, 255, .10),
            transparent 35%
        ),
        #03060d;

    color: #ffffff;

    line-height: 1.6;

    overflow-x: hidden;
}


/* =========================================================
   VARIABLES
========================================================= */

:root {

    --cyan: #00d9ff;
    --blue: #2388ff;
    --purple: #7c4dff;

    --green: #20e3a2;
    --yellow: #ffd166;
    --red: #ff5577;

    --bg: #03060d;
    --panel: rgba(8, 18, 38, .82);
    --panel-light: rgba(255, 255, 255, .035);

    --border:
        rgba(0, 217, 255, .18);

    --text: #ffffff;
    --muted: #8197b8;

    --radius: 18px;
}


/* =========================================================
   SCROLLBAR
========================================================= */

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #03060d;
}

::-webkit-scrollbar-thumb {
    background:
        linear-gradient(
            #00d9ff,
            #7c4dff
        );

    border-radius: 20px;
}


/* =========================================================
   TOPBAR
========================================================= */

.admin-topbar {

    position: sticky;

    top: 0;

    width: 100%;

    min-height: 76px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 20px;

    padding:
        14px 28px;

    background:
        rgba(3, 8, 20, .88);

    border-bottom:
        1px solid rgba(0, 217, 255, .18);

    backdrop-filter:
        blur(18px);

    -webkit-backdrop-filter:
        blur(18px);

    z-index: 9999;

    box-shadow:
        0 10px 40px rgba(0,0,0,.35);
}


/* LOGO */

.admin-logo {

    display: flex;

    align-items: center;

    gap: 12px;

    color: #ffffff;

    font-size: 21px;

    font-weight: 900;

    letter-spacing: .5px;
}

.admin-logo span:first-child {

    font-size: 28px;

    filter:
        drop-shadow(
            0 0 12px
            rgba(0,217,255,.65)
        );
}

.admin-logo small {

    display: block;

    margin-top: -2px;

    color: var(--cyan);

    font-size: 8px;

    letter-spacing: 2px;

    font-weight: 900;
}


/* =========================================================
   TOPBAR STATUS
========================================================= */

.admin-status {

    display: flex;

    align-items: center;

    gap: 10px;

    padding:
        8px 13px;

    border:
        1px solid
        rgba(32,227,162,.25);

    border-radius: 999px;

    background:
        rgba(32,227,162,.06);

    color:
        #aaffdc;

    font-size: 11px;

    font-weight: 800;
}

.status-dot {

    width: 8px;

    height: 8px;

    border-radius: 50%;

    background: var(--green);

    box-shadow:
        0 0 12px
        rgba(32,227,162,.9);

    animation:
        statusPulse 1.8s infinite;
}

@keyframes statusPulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: .45;
        transform: scale(.75);
    }
}


/* =========================================================
   ADMIN LAYOUT
========================================================= */

.admin-layout {

    width: 100%;

    max-width: 1500px;

    margin: 0 auto;

    padding: 30px;

    display: grid;

    grid-template-columns:
        250px
        minmax(0, 1fr);

    gap: 25px;
}


/* =========================================================
   SIDEBAR
========================================================= */

.admin-sidebar {

    position: sticky;

    top: 106px;

    height:
        calc(100vh - 136px);

    display: flex;

    flex-direction: column;

    padding: 15px;

    background:
        linear-gradient(
            180deg,
            rgba(9, 22, 45, .88),
            rgba(5, 13, 28, .88)
        );

    border:
        1px solid
        var(--border);

    border-radius:
        var(--radius);

    box-shadow:
        0 20px 60px
        rgba(0,0,0,.35);

    overflow: hidden;
}


/* SIDEBAR TITLE */

.sidebar-title {

    padding:
        12px 12px 17px;

    color:
        var(--muted);

    font-size: 9px;

    font-weight: 900;

    letter-spacing: 2px;

    text-transform: uppercase;
}


/* SIDEBAR LINKS */

.admin-nav {

    display: flex;

    flex-direction: column;

    gap: 6px;
}

.admin-nav a {

    min-height: 46px;

    display: flex;

    align-items: center;

    gap: 12px;

    padding:
        9px 12px;

    color: #b7c9e5;

    background:
        transparent;

    border:
        1px solid transparent;

    border-radius: 11px;

    text-decoration: none;

    font-size: 12px;

    font-weight: 800;

    transition:
        .18s ease;
}

.admin-nav a:hover {

    color: #ffffff;

    background:
        linear-gradient(
            90deg,
            rgba(0,217,255,.10),
            rgba(124,77,255,.08)
        );

    border-color:
        rgba(0,217,255,.18);

    transform:
        translateX(3px);
}

.admin-nav a.active {

    color: #ffffff;

    background:
        linear-gradient(
            90deg,
            rgba(35,136,255,.25),
            rgba(124,77,255,.20)
        );

    border-color:
        rgba(0,217,255,.30);

    box-shadow:
        inset 3px 0 0 var(--cyan),
        0 8px 25px rgba(0,0,0,.18);
}

.admin-nav-icon {

    width: 26px;

    display: flex;

    justify-content: center;

    font-size: 18px;
}


/* SIDEBAR FOOTER */

.sidebar-footer {

    margin-top: auto;

    padding:
        15px 10px 5px;

    border-top:
        1px solid
        rgba(79,151,255,.12);

    color:
        #536b8d;

    font-size: 8px;

    font-weight: 800;

    letter-spacing: 1.5px;

    text-align: center;
}


/* =========================================================
   CONTENT
========================================================= */

.admin-content {

    min-width: 0;
}


/* =========================================================
   PAGE HEADER
========================================================= */

.page-header {

    margin-bottom: 25px;
}

.page-header .eyebrow {

    margin-bottom: 6px;

    color: var(--cyan);

    font-size: 9px;

    font-weight: 900;

    letter-spacing: 3px;
}

.page-header h1 {

    font-size:
        clamp(28px, 4vw, 45px);

    line-height: 1.05;

    font-weight: 950;

    letter-spacing: -1px;
}

.page-header h1 span {

    background:
        linear-gradient(
            90deg,
            var(--cyan),
            var(--blue),
            var(--purple)
        );

    -webkit-background-clip: text;

    background-clip: text;

    color: transparent;
}

.page-header p {

    max-width: 700px;

    margin-top: 10px;

    color: var(--muted);

    font-size: 13px;
}


/* =========================================================
   DASHBOARD GRID
========================================================= */

.dashboard-grid {

    display: grid;

    grid-template-columns:
        repeat(
            4,
            minmax(0, 1fr)
        );

    gap: 15px;

    margin-bottom: 25px;
}


/* =========================================================
   STAT CARD
========================================================= */

.stat-card {

    position: relative;

    min-height: 135px;

    padding: 19px;

    background:
        linear-gradient(
            145deg,
            rgba(11,27,54,.90),
            rgba(5,14,30,.90)
        );

    border:
        1px solid
        var(--border);

    border-radius:
        var(--radius);

    overflow: hidden;

    transition:
        transform .2s ease,
        border-color .2s ease,
        box-shadow .2s ease;
}

.stat-card::before {

    content: "";

    position: absolute;

    width: 120px;

    height: 120px;

    right: -50px;

    top: -55px;

    border-radius: 50%;

    background:
        rgba(0,217,255,.10);

    filter:
        blur(5px);
}

.stat-card:hover {

    transform:
        translateY(-4px);

    border-color:
        rgba(0,217,255,.35);

    box-shadow:
        0 18px 40px
        rgba(0,0,0,.30);
}

.stat-icon {

    font-size: 23px;

    margin-bottom: 8px;
}

.stat-label {

    color: var(--muted);

    font-size: 9px;

    font-weight: 900;

    letter-spacing: 1.5px;

    text-transform: uppercase;
}

.stat-value {

    margin-top: 2px;

    font-size: 28px;

    font-weight: 950;
}

.stat-extra {

    margin-top: 3px;

    color: var(--green);

    font-size: 9px;

    font-weight: 800;
}


/* =========================================================
   PANELS
========================================================= */

.admin-panel {

    margin-bottom: 20px;

    padding: 22px;

    background:
        linear-gradient(
            145deg,
            rgba(8,20,42,.88),
            rgba(4,11,24,.90)
        );

    border:
        1px solid
        var(--border);

    border-radius:
        var(--radius);

    box-shadow:
        0 18px 50px
        rgba(0,0,0,.25);
}

.panel-header {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 15px;

    margin-bottom: 18px;
}

.panel-title {

    display: flex;

    align-items: center;

    gap: 9px;

    font-size: 15px;

    font-weight: 900;
}

.panel-title span {

    font-size: 20px;
}

.panel-subtitle {

    color: var(--muted);

    font-size: 10px;
}


/* =========================================================
   BUTTONS
========================================================= */

.admin-btn {

    min-height: 40px;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 8px;

    padding:
        8px 15px;

    border: 1px solid
        rgba(0,217,255,.25);

    border-radius: 10px;

    background:
        rgba(255,255,255,.035);

    color: #ffffff;

    font-size: 11px;

    font-weight: 900;

    cursor: pointer;

    transition:
        .18s ease;
}

.admin-btn:hover {

    transform:
        translateY(-2px);

    border-color:
        var(--cyan);

    background:
        rgba(0,217,255,.10);

    box-shadow:
        0 8px 22px
        rgba(0,217,255,.10);
}

.admin-btn.primary {

    background:
        linear-gradient(
            135deg,
            var(--blue),
            var(--purple)
        );

    border-color:
        rgba(255,255,255,.18);
}

.admin-btn.success {

    background:
        rgba(32,227,162,.10);

    border-color:
        rgba(32,227,162,.30);

    color:
        #9fffd8;
}

.admin-btn.danger {

    background:
        rgba(255,85,119,.08);

    border-color:
        rgba(255,85,119,.25);

    color:
        #ff9db2;
}


/* =========================================================
   TABLE
========================================================= */

.admin-table-wrapper {

    width: 100%;

    overflow-x: auto;
}

.admin-table {

    width: 100%;

    border-collapse: collapse;

    min-width: 650px;
}

.admin-table th {

    padding:
        12px;

    color:
        #6f86a8;

    background:
        rgba(255,255,255,.025);

    font-size: 9px;

    font-weight: 900;

    letter-spacing: 1.5px;

    text-align: left;

    text-transform: uppercase;
}

.admin-table td {

    padding:
        13px 12px;

    border-top:
        1px solid
        rgba(79,151,255,.09);

    color:
        #c9d7eb;

    font-size: 11px;
}

.admin-table tr {

    transition:
        background .15s ease;
}

.admin-table tbody tr:hover {

    background:
        rgba(0,217,255,.035);
}


/* =========================================================
   BADGES
========================================================= */

.badge {

    display: inline-flex;

    align-items: center;

    gap: 5px;

    padding:
        5px 9px;

    border-radius:
        999px;

    font-size: 8px;

    font-weight: 900;

    letter-spacing: .8px;
}

.badge.online {

    color: #8fffd0;

    background:
        rgba(32,227,162,.09);

    border:
        1px solid
        rgba(32,227,162,.20);
}

.badge.warning {

    color: #ffe49a;

    background:
        rgba(255,209,102,.08);

    border:
        1px solid
        rgba(255,209,102,.20);
}

.badge.error {

    color: #ff9eb4;

    background:
        rgba(255,85,119,.08);

    border:
        1px solid
        rgba(255,85,119,.20);
}


/* =========================================================
   FORMS
========================================================= */

.form-grid {

    display: grid;

    grid-template-columns:
        repeat(
            2,
            minmax(0, 1fr)
        );

    gap: 15px;
}

.form-group {

    display: flex;

    flex-direction: column;

    gap: 7px;
}

.form-group.full {

    grid-column:
        1 / -1;
}

.form-label {

    color:
        #91a7c6;

    font-size: 9px;

    font-weight: 900;

    letter-spacing: 1px;

    text-transform: uppercase;
}

.form-input,
.form-select,
.form-textarea {

    width: 100%;

    padding:
        11px 12px;

    color: #ffffff;

    background:
        rgba(0,0,0,.22);

    border:
        1px solid
        rgba(79,151,255,.18);

    border-radius:
        10px;

    outline: none;

    font-family: inherit;

    font-size: 12px;

    transition:
        .18s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {

    border-color:
        rgba(0,217,255,.55);

    box-shadow:
        0 0 0 3px
        rgba(0,217,255,.07);
}

.form-textarea {

    min-height: 130px;

    resize: vertical;
}


/* =========================================================
   ALERTS
========================================================= */

.admin-alert {

    display: flex;

    align-items: flex-start;

    gap: 12px;

    padding:
        14px 16px;

    margin-bottom: 15px;

    border-radius:
        12px;

    border:
        1px solid
        rgba(0,217,255,.18);

    background:
        rgba(0,217,255,.05);

    color:
        #bcd0eb;

    font-size: 11px;
}

.admin-alert-icon {

    font-size: 19px;
}

.admin-alert.success {

    border-color:
        rgba(32,227,162,.20);

    background:
        rgba(32,227,162,.05);
}

.admin-alert.warning {

    border-color:
        rgba(255,209,102,.20);

    background:
        rgba(255,209,102,.05);
}

.admin-alert.error {

    border-color:
        rgba(255,85,119,.20);

    background:
        rgba(255,85,119,.05);
}


/* =========================================================
   ACTIVITY
========================================================= */

.activity-list {

    display: flex;

    flex-direction: column;

    gap: 5px;
}

.activity-item {

    display: grid;

    grid-template-columns:
        35px
        1fr
        auto;

    align-items: center;

    gap: 10px;

    padding:
        11px;

    border-radius:
        10px;

    transition:
        background .15s ease;
}

.activity-item:hover {

    background:
        rgba(255,255,255,.025);
}

.activity-icon {

    width: 32px;

    height: 32px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 9px;

    background:
        rgba(35,136,255,.10);

    font-size: 16px;
}

.activity-text strong {

    display: block;

    color: #eaf3ff;

    font-size: 11px;
}

.activity-text small {

    color: #637b9d;

    font-size: 9px;
}

.activity-time {

    color: #526b8d;

    font-size: 8px;

    white-space: nowrap;
}


/* =========================================================
   FOOTER
========================================================= */

.admin-footer {

    padding:
        25px 5px 10px;

    color:
        #536b8d;

    font-size: 8px;

    font-weight: 800;

    letter-spacing: 1.5px;

    text-align: center;
}


/* =========================================================
   ANIMATION
========================================================= */

@keyframes panelAppear {

    from {

        opacity: 0;

        transform:
            translateY(10px);
    }

    to {

        opacity: 1;

        transform:
            translateY(0);
    }
}

.admin-panel,
.stat-card {

    animation:
        panelAppear .35s ease both;
}


/* =========================================================
   RESPONSIVE — TABLETTE
========================================================= */

@media (max-width: 1050px) {

    .admin-layout {

        grid-template-columns:
            210px
            minmax(0, 1fr);

        padding: 20px;

        gap: 18px;
    }

    .dashboard-grid {

        grid-template-columns:
            repeat(2, minmax(0, 1fr));
    }
}


/* =========================================================
   RESPONSIVE — MOBILE
========================================================= */

@media (max-width: 760px) {

    .admin-topbar {

        min-height: 68px;

        padding:
            12px 15px;
    }

    .admin-status {

        padding:
            7px 9px;

        font-size: 8px;
    }

    .admin-layout {

        display: block;

        padding:
            15px;
    }

    .admin-sidebar {

        position: relative;

        top: auto;

        height: auto;

        margin-bottom: 18px;

        padding: 10px;
    }

    .sidebar-title {

        padding:
            9px 8px 12px;
    }

    .admin-nav {

        display: grid;

        grid-template-columns:
            repeat(2, 1fr);
    }

    .admin-nav a {

        min-height: 43px;

        font-size: 10px;
    }

    .sidebar-footer {

        display: none;
    }

    .dashboard-grid {

        grid-template-columns:
            repeat(2, minmax(0, 1fr));

        gap: 10px;
    }

    .stat-card {

        min-height: 120px;

        padding: 15px;
    }

    .stat-value {

        font-size: 24px;
    }

    .admin-panel {

        padding: 16px;
    }

    .form-grid {

        grid-template-columns: 1fr;
    }

    .form-group.full {

        grid-column: auto;
    }

    .panel-header {

        align-items: flex-start;

        flex-direction: column;
    }
}


/* =========================================================
   PETIT MOBILE
========================================================= */

@media (max-width: 450px) {

    .admin-logo {

        font-size: 16px;
    }

    .admin-logo span:first-child {

        font-size: 23px;
    }

    .admin-logo small {

        font-size: 6px;
    }

    .admin-status {

        display: none;
    }

    .admin-nav {

        grid-template-columns: 1fr;
    }

    .dashboard-grid {

        grid-template-columns: 1fr;
    }

    .page-header h1 {

        font-size: 30px;
    }
}
