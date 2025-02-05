function createProfileContainer(profileData) {
    const profileContainer = document.createElement("div");
    profileContainer.className = "profile-container";

    const profileLink = document.createElement("a");
    profileLink.href = profileData.profileLink;
    profileLink.target = "_blank";

    const profilePicWrapper = document.createElement("div");
    profilePicWrapper.className = "profile-pic-wrapper";

    const profilePic = document.createElement("img");
    profilePic.src = profileData.profileImage;
    profilePic.alt = "Profile Picture";
    profilePic.className = "profile-pic";

    profilePicWrapper.appendChild(profilePic);

    const profileLinkDiv = document.createElement("div");
    profileLinkDiv.className = "profile-link";

    const profileLinkSpan = document.createElement("span");

    const profileIcon = document.createElement("img");
    profileIcon.src = profileData.profileIcon;
    profileIcon.alt = "globe";

    const profileSiteText = document.createElement("p");
    profileSiteText.textContent = profileData.profileSiteText;

    profileLinkSpan.appendChild(profileIcon);
    profileLinkSpan.appendChild(profileSiteText);
    profileLinkDiv.appendChild(profileLinkSpan);

    profileLink.appendChild(profilePicWrapper);
    profileLink.appendChild(profileLinkDiv);
    profileContainer.appendChild(profileLink);

    if (profileData.neonEnable === 0) {
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`
            .profile-pic-wrapper::before,
            .profile-pic-wrapper::after {
                display: none;
            }
        `, styleSheet.cssRules.length);
    }

    return profileContainer;
}


function createUserName(profileData) {
    const userName = document.createElement("h1");
    userName.textContent = profileData.userName;
    return userName;
}

function createEmailDiv(profileData) {
    const emailDiv = document.createElement("div");
    emailDiv.className = "email";

    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${profileData.email}`;
    emailLink.textContent = profileData.email;

    emailDiv.appendChild(emailLink);
    return emailDiv;
}

function createLinkBoxes(profileData) {
    return profileData.links.slice(0, 5).map(link => {
    const discordBox = document.createElement("div");
    discordBox.className = "discord-box";

    const discordIcon = document.createElement("img");
    discordIcon.src = link.icon;
    discordIcon.alt = "Discord Logo";

    const discordLink = document.createElement("a");
    discordLink.href = link.url;
    discordLink.target = "_blank";
    discordLink.textContent = link.text;

    discordBox.appendChild(discordIcon);
    discordBox.appendChild(discordLink);
    return discordBox;
    });
}

function applyDynamicStyles(profileData, styleSheet, selectedAnimationBackgroundIndex, EnableAnimationBackground, animationDurationBackground, useCanvas, selectedCanvasIndex) {
    if (useCanvas) {
        const canvas = document.createElement("canvas");
        canvas.id = "backgroundCanvas";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.id = "container";

        // Charger et exécuter l'animation du canvas à partir du fichier spécifié ainsi que les extensions nécessaires
        if (Array.isArray(canvaData[selectedCanvasIndex].extension)) {
            canvaData[selectedCanvasIndex].extension.forEach(ext => {
            const s = document.createElement("script");
            s.src = ext;
            document.body.appendChild(s);
            });
        } else if (canvaData[selectedCanvasIndex].extension !== "none") {
            const s = document.createElement("script");
            s.src = `${canvaData[selectedCanvasIndex].extension}`;
            document.body.appendChild(s);
        }

        const script = document.createElement("script");
        script.src = `./contents/js/canvaAnimation/${canvaData[selectedCanvasIndex].fileNames}`;
        document.body.appendChild(script);

        script.onload = () => {
            if (typeof runCanvasAnimation === "function") {
                runCanvasAnimation(ctx, canvas);
            }
        };

    } else {
        document.body.style.backgroundImage = `url(${profileData.backgroundImage})`;
    }

    document.body.style.backgroundSize = `${profileData.backgroundSize}%`;

    if (EnableAnimationBackground && !useCanvas) {
        document.body.style.animation = `${animationBackground[selectedAnimationBackgroundIndex].keyframes} ${animationDurationBackground}s`;
    } else {
        document.body.style.animation = "none";
    }

    styleSheet.insertRule(`
    .profile-container:hover .profile-pic {
        // ...existing code...
    }`);
}

function applyTheme(theme) {
    const article = document.getElementById("profile-article");
    article.style.background = theme.background;
    article.style.color = theme.textColor;
    document.querySelectorAll(".discord-box").forEach(box => {
        box.style.backgroundColor = theme.buttonBackground;
        box.style.color = theme.buttonTextColor;
    });
    document.querySelectorAll(".discord-box").forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = theme.buttonHoverBackground;
            box.style.boxShadow = "0 0 50px " + theme.buttonHoverBackground;
        });
        box.addEventListener("mouseout", () => {
            box.style.backgroundColor = theme.buttonBackground;
            box.style.boxShadow = "none";
        });
    });
    document.querySelectorAll("a:not(.footer)").forEach(link => {
        link.style.color = theme.textColor;
    });
    document.querySelectorAll("a:not(.footer):hover").forEach(link => {
        link.style.color = theme.linkHoverColor;
    });
    document.querySelectorAll("button").forEach(link => {
        link.style.backgroundColor = theme.buttonBackground
    });
    document.querySelectorAll("button > *").forEach(link => {
        link.style.color = theme.buttonTextColor;
    });
    document.querySelectorAll("button:hover").forEach(link => {
        link.style.color = theme.buttonHoverColor;
    });
    const emailDiv = document.querySelector(".email");
    emailDiv.style.backgroundColor = theme.buttonBackground;
    emailDiv.style.color = theme.buttonTextColor;

    // Appliquer la nouvelle propriété articleHoverBoxShadow
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        article:hover {
            box-shadow: ${theme.articleHoverBoxShadow};
        }
    `, styleSheet.cssRules.length);
}

function applyAnimation(animation, animationEnabled) {
    const article = document.getElementById("profile-article");
    if (animationEnabled) {
        article.style.animation = animation.keyframes;
    }
}
function applyAnimationButton(animation, animationButtonEnabled, delayAnimationButton) {
    const articleChildren = document.querySelectorAll("#profile-article > *");
    if (animationButtonEnabled) {
        articleChildren.forEach((child, index) => {
            child.style.animationDelay = `${(index + 1) * delayAnimationButton}s`;
            child.style.animation = `${animation.keyframes} ${animation.duration || delayAnimationButton * index}s`;
            child.style.animationFillMode = "backwards";
        });
    }
}
function setIconBasedOnTheme(theme) {
    const iconElement = document.getElementById("theme-icon");

    if (iconElement) {
        if (!theme.darkTheme && !document.body.classList.contains("dark-theme")) {
            iconElement.name = "moon-outline";
        } else if (theme.darkTheme && document.body.classList.contains("dark-theme")) {
            iconElement.name = "moon-outline";
        } else {
            iconElement.name = "sunny-outline";
        }
    }
}

function loadThemeConfig(theme) {
    applyTheme(theme);
    setIconBasedOnTheme(theme.darkTheme);
}

function toggleTheme(theme) {
    const currentTheme = document.body.classList.contains("dark-theme") ? theme : theme.opposite;
    applyTheme(currentTheme);
    setIconBasedOnTheme(theme);
    document.body.classList.toggle("dark-theme");
}

function createToggleThemeButton(theme) {
    const button = document.createElement("button");
    button.className = "theme-toggle-button";
    const icon = document.createElement("ion-icon");
    icon.id = "theme-icon";
    icon.name = theme.darkTheme ? "moon-outline" : "sunny-outline";
    button.appendChild(icon);
    
    button.addEventListener("click", () => toggleTheme(theme));

    const article = document.getElementById("profile-article");
    article.appendChild(button);
}