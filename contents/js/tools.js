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

    // "display:none;" si le texte est vide
    if (profileData.profileSiteText.trim() === "") {
        profileSiteText.style.display = "none";
    } if (profileData.profileImage.trim() === "") {
        profilePic.style.display = "none";
    } if (profileData.profileIcon.trim() === "") {
        profileIcon.style.display = "none";
    } if (profileData.profileLink.trim() === "") {
        profileLink.style.display = "none";
    } if (profileData.profileHoverColor.trim() === "") {
        profileContainer.style.display = "none";
    }

    return profileContainer;
}

function createUserName(profileData) {
    const userName = document.createElement("h1");
    userName.textContent = profileData.userName;

    if (!profileData.userName.trim()) {
        userName.style.display = "none";
    }

    return userName;
}

function createEmailAndDescription(profileData) {
    const container = document.createElement("div");
    container.className = "email-description-container";

    const emailDiv = document.createElement("div");
    emailDiv.className = "email";

    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${profileData.email}`;
    emailLink.textContent = profileData.email;

    emailDiv.appendChild(emailLink);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "profile-description";

    const descriptionText = document.createElement("p");
    descriptionText.textContent = profileData.description;

    descriptionDiv.appendChild(descriptionText);

    container.appendChild(emailDiv);
    container.appendChild(descriptionDiv);

    if (!profileData.description.trim()) {
        descriptionDiv.style.display = "none";
    } else {
        addEmailStyles();
    }

    if (!profileData.email.trim()) {
        emailDiv.style.display = "none";
    }

    return container;
}

function addEmailStyles() {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        .email {
            width: 100%;
            border: 2px solid #7289DA;
            border-radius: 10px;
            background-color: #2C2F33;
            color: white;
            font-size: 1em;
            font-weight: bold;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
    `, styleSheet.cssRules.length);
    styleSheet.insertRule(`
        .email a {
            display: block;
            padding: 10px;
            text-align: center;
            text-decoration: none;
            color: white;
            border-radius: 10px;
        }
    `, styleSheet.cssRules.length);
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

        if (!link.text.trim()) {
            discordLink.style.display = "none";
        }
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

        try {
            const script = document.createElement("script");
            script.src = `./contents/js/canvaAnimation/${canvaData[selectedCanvasIndex].fileNames}`;
            document.body.appendChild(script);

            script.onload = () => {
                if (typeof runCanvasAnimation === "function") {
                    runCanvasAnimation(ctx, canvas);
                } else {
                    console.error("runCanvasAnimation is not a function");
                    setBackgroundStyles(profileData);
                }
            };
        } catch (error) {
            console.error("Error loading canvas animation:", error);
            setBackgroundStyles(profileData);
        }

    } else {
        setBackgroundStyles(profileData);
    }

    if (EnableAnimationBackground && !useCanvas && !Array.isArray(profileData.background)) {
        document.body.style.animation = `${animationBackground[selectedAnimationBackgroundIndex].keyframes} ${animationDurationBackground}s`;
    } else {
        document.body.style.animation = "none";
    }

    // Appliquer le neon si activé
    if (profileData.neonEnable === 0) {
        styleSheet.insertRule(`
            .profile-pic-wrapper::before,
            .profile-pic-wrapper::after {
                display: none;
            }
        `, styleSheet.cssRules.length);
    } else {
        const neonGradient = profileData.neonColors.join(", ");
        styleSheet.insertRule(`
            .profile-pic-wrapper::after, .profile-pic-wrapper::before {
                background: linear-gradient(45deg, ${neonGradient});
            }
        `, styleSheet.cssRules.length);
    }
}

function setBackgroundStyles(profileData) {
    if (Array.isArray(profileData.background)) {
        document.body.style.background = `linear-gradient(${profileData.degBackgroundColor}deg, ${profileData.background.join(", ")})`;
        document.body.style.backgroundSize = "cover";
    } else {
        document.body.style.background = `url(${profileData.background})`;
        document.body.style.backgroundSize = `${profileData.backgroundSize}%`;
    }
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
    document.querySelectorAll("a").forEach(link => {
        link.style.color = theme.textColor;
    });
    document.querySelectorAll("a:hover").forEach(link => {
        link.style.color = theme.linkHoverColor;
    });
    const emailDiv = document.querySelector(".email");
    emailDiv.style.backgroundColor = theme.buttonBackground;
    emailDiv.style.color = theme.buttonTextColor;

    emailDiv.addEventListener("mouseover", () => {
        emailDiv.style.backgroundColor = theme.buttonHoverBackground;
        emailDiv.style.boxShadow = `0 0 10px ${theme.buttonHoverBackground}`;
    });
    emailDiv.addEventListener("mouseout", () => {
        emailDiv.style.backgroundColor = theme.buttonBackground;
        emailDiv.style.boxShadow = `0 0 10px ${theme.buttonBackground}`;
    });

    const themeToggle = document.querySelector(".theme-toggle-button");
    themeToggle.style.backgroundColor = theme.buttonBackground;
    themeToggle.style.color = theme.textColor;

    themeToggle.addEventListener("mouseover", () => {
        themeToggle.style.backgroundColor = theme.buttonHoverBackground;
        themeToggle.style.boxShadow = `0 0 10px ${theme.buttonHoverBackground}`;
    });
    themeToggle.addEventListener("mouseout", () => {
        themeToggle.style.backgroundColor = theme.buttonBackground;
        themeToggle.style.boxShadow = `0 0 10px ${theme.buttonBackground}`;
    });

    const labelButtons = document.querySelectorAll(".label-button");
    labelButtons.forEach(button => {
        button.style.border = `2px solid ${theme.buttonBackground}`;
        button.style.color = theme.buttonTextColor;
    });

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

    if (!theme) {
        button.style.display = "none";
    }
}

function createLabelButtons(profileData) {
    const container = document.createElement("div");
    container.className = "label-buttons-container";

    profileData.labels.forEach(label => {
        const button = document.createElement("div");
        button.className = "label-button";
        button.style.backgroundColor = `${label.color}80`;
        button.style.border = `2px solid ${label.color}`;
        button.style.color = label.fontColor;
        button.textContent = label.data;

        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = label.color;
        });

        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = `${label.color}80`;
        });

        container.appendChild(button);
        if (!label.data.trim() || (!label.color.trim() || label.color.trim() === "#") || (!label.fontColor.trim() || label.fontColor.trim() === "#")) {
            button.style.display = "none";
        }
    });

    const article = document.getElementById("profile-article");
    article.appendChild(container);
}
