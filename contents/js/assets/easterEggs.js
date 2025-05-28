// 1. Définition centralisée des Easter Eggs
const easterEggsList = [
    {
        name: "konamiEgg",
        label: "Konami Code",
        activeCookie: "konamiEggActive",
        unlockCookie: "konamiEgg",
        themeClass: "konami-theme",
        onActivate: function() {
            document.body.classList.add("konami-theme");
            if (!document.title.includes("👑")) document.title = "👑 " + document.title;
            const klayFooter = document.querySelector('footer a p');
            if (klayFooter) klayFooter.classList.add("rainbow-footer");
            const h1 = document.querySelector("h1");
            if (h1) {
                h1.style.color = "gold";
                h1.style.textShadow = "0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.4)";
            }
        },
        onDeactivate: function() {
            document.body.classList.remove("konami-theme");
            document.title = document.title.replace(/^👑\s*/, "");
            const klayFooter = document.querySelector('footer a p');
            if (klayFooter) klayFooter.classList.remove("rainbow-footer");
            const h1 = document.querySelector("h1");
            if (h1) {
                h1.style.color = "";
                h1.style.textShadow = "";
            }
        }
    },
    {
        name: "reverseEgg",
        label: "Mode Inversé",
        activeCookie: "reverseEggActive",
        unlockCookie: "reverseEgg",
        themeClass: "reverse-theme",
        onActivate: function() {
            document.body.classList.add("reverse-theme");
        },
        onDeactivate: function() {
            document.body.classList.remove("reverse-theme");
        }
    }
    // Ajoute ici d'autres eggs au même format
];

// 2. Initialisation des Easter Eggs (détection)
function initEasterEggs() {
    // Konami
    let konami = [38,38,40,40,37,39,37,39,66,65], konamiIndex = 0;
    window.addEventListener("keydown", function(e) {
        if (e.keyCode === konami[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konami.length) {
                unlockEgg("konamiEgg");
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Reverse
    let reverseBuffer = "";
    window.addEventListener("keydown", function(e) {
        if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
        reverseBuffer += e.key.toLowerCase();
        if (reverseBuffer.length > 7) reverseBuffer = reverseBuffer.slice(-7);
        if (reverseBuffer.endsWith("reverse")) {
            unlockEgg("reverseEgg");
            reverseBuffer = "";
        }
    });

    if (easterEggsList.some(egg => getCookie(egg.unlockCookie))) {
        createEasterEggGearButton();
    }

    easterEggsList.forEach(egg => {
        if (getCookie(egg.activeCookie) === "1") {
            if (egg.onActivate) egg.onActivate();
        }
    });
}

// 3. Fonction pour débloquer un egg
function unlockEgg(eggName) {
    const egg = easterEggsList.find(e => e.name === eggName);
    if (!egg) return;
    let firstTime = !getCookie(egg.unlockCookie);
    if (firstTime) {
        setCookie(egg.unlockCookie, "1", 365);
        setCookie(egg.activeCookie, "1", 365);
        if (egg.onActivate) egg.onActivate();
        createEasterEggGearButton();
        showEggUnlockedModal(egg.label, true);
        // Met à jour le menu si déjà ouvert
        if (document.querySelector('.easter-egg-modal')) {
            updateEasterEggModal(document.querySelector('.easter-egg-modal'));
        }
    } else {
        // toggle activation
        let isActive = getCookie(egg.activeCookie) === "1";
        setCookie(egg.activeCookie, isActive ? "0" : "1", 365);
        if (isActive && egg.onDeactivate) egg.onDeactivate();
        if (!isActive && egg.onActivate) egg.onActivate();
        showEggUnlockedModal(egg.label, false);
        if (document.querySelector('.easter-egg-modal')) {
            updateEasterEggModal(document.querySelector('.easter-egg-modal'));
        }
    }
}

// 4. Affiche un message temporaire lors du déblocage
function showEggUnlockedModal(label, firstTime) {
    const modal = document.createElement("div");
    modal.className = "egg-unlocked-modal";
    modal.innerHTML = `
        <span style="font-size:2em;display:block;margin-bottom:8px;">🥚</span>
        <span style="font-size:1.2em;">${firstTime ? "Easter Egg débloqué !" : "Easter Egg déjà débloqué !"}</span><br>
        <span style="color:#00ff8f;font-weight:bold;">${label} activé !</span>
    `;
    Object.assign(modal.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "rgba(30,30,60,0.97)",
        color: "#fff",
        padding: "24px 36px",
        borderRadius: "14px",
        fontSize: "1.5em",
        fontWeight: "bold",
        zIndex: "9999",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        textAlign: "center"
    });
    document.body.appendChild(modal);
    setTimeout(() => modal.remove(), 2000);
}

// 5. Génère dynamiquement le bouton et le modal
function createEasterEggGearButton() {
    const article = document.querySelector("article");
    if (document.getElementById("easter-egg-gear-btn")) return;

    const modal = document.createElement("div");
    modal.className = "easter-egg-modal";
    Object.assign(modal.style, {
        position: "absolute",
        top: "45px",
        left: "0",
        padding: "18px 24px",
        borderRadius: "12px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
        zIndex: "1001",
        minWidth: "220px",
        fontSize: "1em",
        display: "none",
        flexDirection: "column",
        gap: "12px"
    });
    article.appendChild(modal);

    const btn = document.createElement("button");
    btn.id = "easter-egg-gear-btn";
    btn.title = "Easter Eggs";
    btn.innerHTML = `<ion-icon name="settings-outline"></ion-icon>`;
    btn.className = "easter-egg-gear-btn";
    const iconBtn = btn.querySelector("ion-icon");

    btn.addEventListener("click", (e) => {
        iconBtn.style.transform = iconBtn.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
        e.stopPropagation();
        if (modal) {
            modal.style.display = modal.style.display === "none" ? "flex" : "none";
        }
    });

    document.addEventListener("click", (e) => {
        iconBtn.style.transform = "rotate(0deg)";
        if (modal && !modal.contains(e.target) && !btn.contains(e.target)) {
            modal.style.display = "none";
        }
    });

    // Style du bouton
    Object.assign(btn.style, {
        position: "absolute",
        top: "10px",
        left: "10px",
        zIndex: "1000",
        border: "none",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.3em",
        cursor: "pointer",
        transition: "background 0.5s"
    });
    article.appendChild(btn);

    // Titre
    const titleDiv = document.createElement("div");
    titleDiv.style.marginBottom = "8px";
    titleDiv.style.fontWeight = "bold";
    titleDiv.textContent = "Easter Eggs";
    modal.appendChild(titleDiv);

    updateEasterEggModal(modal);

    if (document.querySelector('.easter-egg-modal')) {
        updateEasterEggModal(document.querySelector('.easter-egg-modal'));
    }
}

function updateEasterEggModal(modal) {
    // Vide le contenu sauf le titre (premier enfant)
    while (modal.children.length > 1) {
        modal.removeChild(modal.lastChild);
    }
    easterEggsList.forEach(egg => {
        const unlocked = !!getCookie(egg.unlockCookie);
        const checked = getCookie(egg.activeCookie) === "1";
        const row = document.createElement("div");
        row.className = "egg-switch-row";
        const label = document.createElement("span");
        label.textContent = egg.label;
        row.appendChild(label);

        const switchLabel = document.createElement("label");
        switchLabel.className = "switch";
        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = egg.name + "-switch";
        input.checked = checked;
        input.disabled = !unlocked;
        const slider = document.createElement("span");
        slider.className = "slider";
        switchLabel.appendChild(input);
        switchLabel.appendChild(slider);
        row.appendChild(switchLabel);

        if (!unlocked) {
            row.style.filter = "blur(4px) grayscale(1)";
            row.style.opacity = "0.5";
            row.title = "Débloque cet Easter Egg pour l'activer !";
        }

        input.addEventListener("change", function() {
            setCookie(egg.activeCookie, this.checked ? "1" : "0", 365);
            if (this.checked && egg.onActivate) egg.onActivate();
            if (!this.checked && egg.onDeactivate) egg.onDeactivate();
        });

        modal.appendChild(row);
    });
}