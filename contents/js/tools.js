function createProfileContainer(profileData) {
    const profileContainer = document.createElement("div");
    profileContainer.className = "profile-container";

    const profileLink = document.createElement("a");
    profileLink.href = profileData.profileLink;
    profileLink.target = "_blank";
    profileLink.tabIndex = 0;

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
        if (!profileData.email.trim()) {
            container.style.display = "none";
        } else {
            addEmailStyles(profileData);
            container.style.padding = "0";
            container.style.margin = "0";
            emailDiv.style.borderRadius = "10px";
        }
    } else {
        if (!profileData.email.trim()) {
            emailDiv.style.display = "none";
        } else {
            addEmailStyles();
        }
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
            border: 2px solid ${themes[profileData.selectedThemeIndex % themes.length].buttonHoverBackground};
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
    const maxLinkNumber = 20;
    if (!profileData.links || !profileData.links.length) {
        console.warn("No links found in profile data.");
    } else if (profileData.links.length > maxLinkNumber) {
        console.warn(`Too many links found in profile data, only the first ${maxLinkNumber} will be displayed.`);
    }
    return profileData.links.slice(0, maxLinkNumber).map(link => {
        const discordBox = document.createElement("div");
        const discordIcon = document.createElement("img");
        if (profileData.buttonThemeEnable === 1) {
            const themeConfig = btnIconThemeConfig?.find(config => config.name === link.name);
            if (themeConfig) {
                const themeClass = themeConfig.themeClass + (themeConfig.themeClassAlt ? ` ${themeConfig.themeClassAlt}` : "");
                discordBox.className = `button ${themeClass}`;
                
                discordIcon.classList = "link-icon";
                const icon = themeConfig.icon + (themeConfig.iconAlt ? ` ${themeConfig.iconAlt}` : "");
                discordIcon.src = themeConfig.icon;
                discordBox.appendChild(discordIcon);
                discordIcon.className = "icon";
            } else {
                discordBox.className = "discord-box";
                discordIcon.classList = "link-icon";
                discordIcon.src = link.icon;
                discordIcon.alt = link.text;
                discordBox.appendChild(discordIcon);
            }
        } else {
            discordBox.className = "discord-box";
            discordIcon.classList = "link-icon";
            discordIcon.src = link.icon;
            discordIcon.alt = link.text;
            discordBox.appendChild(discordIcon);
        }

        const discordLink = document.createElement("a");
        discordLink.href = link.url;
        discordLink.target = "_blank";
        discordLink.textContent = link.text;
        discordBox.appendChild(discordLink);

        if (link.description && link.description.trim() !== "" && link.showDescription) {
            // Create the arrow emoji element
            const arrow = document.createElement("span");
            arrow.className = "desc-arrow";
            arrow.style.display = "inline-flex";
            arrow.style.alignItems = "center";
            arrow.style.justifyContent = "center";
            arrow.style.transition = "opacity 0.7s cubic-bezier(0.4,0,0.2,1)";
            arrow.style.opacity = "1";
            arrow.style.marginLeft = "5px";
            arrow.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" 
                xmlns="http://www.w3.org/2000/svg" style="display:block;margin:auto;">
                <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1" 
                stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `;
            discordLink.appendChild(arrow);

            const desc = document.createElement("p");
            desc.className = "link-description";
            desc.textContent = link.description;

            desc.style.transition = "max-height 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s cubic-bezier(0.4,0,0.2,1), margin 0.7s cubic-bezier(0.4,0,0.2,1), padding 0.7s cubic-bezier(0.4,0,0.2,1)";
            desc.style.overflow = "hidden";
            desc.style.maxHeight = "0";
            desc.style.opacity = "0";
            desc.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            desc.style.padding = "0 5px";
            desc.style.borderRadius = "5px";
            desc.style.border = "1px solid rgba(255, 255, 255, 0.5)";
            desc.style.marginTop = "0";
            desc.style.marginBottom = "0";
            desc.style.display = "block";

            discordIcon.style.transform = "translateY(2px)";
            discordIcon.style.transition = "transform 0.7s cubic-bezier(0.4,0,0.2,1)";
            arrow.style.transform = "translateY(3px)";

            discordLink.addEventListener("mouseover", () => {
                discordBox.style.transition = "transform 0.7s cubic-bezier(0.4,0,0.2,1)";
                desc.style.maxHeight = "200px";
                desc.style.opacity = "1";
                desc.style.marginTop = "8px";
                desc.style.marginBottom = "5px";
                desc.style.padding = "5px";
                arrow.style.opacity = "0";
            });
            discordLink.addEventListener("mouseout", () => {
                desc.style.maxHeight = "0";
                desc.style.opacity = "0";
                desc.style.marginTop = "0";
                desc.style.marginBottom = "0";
                desc.style.padding = "0 5px";
                arrow.style.opacity = "1";
            });

            discordLink.appendChild(desc);
        }
        
        if (!link.text.trim()) {
            discordLink.style.display = "none";
        }
        return discordBox;
    });
}
function validateProfileConfig(profileData, themes, btnIconThemeConfig, canvaData, animationBackground) {
    const errors = [];

    // Validate themes
    if (!Array.isArray(themes) || themes.length === 0) {
        errors.push("Themes array is missing or empty.");
    } else {
        themes.forEach((theme, i) => {
            if (!theme.background || !theme.textColor || !theme.buttonBackground || !theme.buttonHoverBackground) {
                errors.push(`Theme at index ${i} is missing required properties.`);
            }
        });
    }

    // Validate profileData
    if (typeof profileData !== "object" || profileData === null) {
        errors.push("profileData is not an object.");
    } else {
        const requiredProfileFields = [
            "profileLink", "profileImage", "profileIcon", "profileSiteText", "profileHoverColor",
            "userName", "email", "description", "links", "labels", "socialIcon", "statusbar", "background"
        ];
        requiredProfileFields.forEach(field => {
            if (!(field in profileData)) {
                errors.push(`profileData is missing field: ${field}`);
            }
        });
        if (!Array.isArray(profileData.links)) {
            errors.push("profileData.links is not an array.");
        }
        if (!Array.isArray(profileData.labels)) {
            errors.push("profileData.labels is not an array.");
        }
        if (!Array.isArray(profileData.socialIcon)) {
            errors.push("profileData.socialIcon is not an array.");
        }
        if (typeof profileData.statusbar !== "object" || profileData.statusbar === null) {
            errors.push("profileData.statusbar is not an object.");
        }
    }

    // Validate btnIconThemeConfig
    if (!Array.isArray(btnIconThemeConfig)) {
        errors.push("btnIconThemeConfig is not an array.");
    }

    // Validate canvaData
    if (!Array.isArray(canvaData)) {
        errors.push("canvaData is not an array.");
    } else {
        canvaData.forEach((canva, i) => {
            if (!canva.fileNames) {
                errors.push(`canvaData at index ${i} is missing fileNames.`);
            }
        });
    }

    // Validate animationBackground
    if (!Array.isArray(animationBackground)) {
        errors.push("animationBackground is not an array.");
    } else {
        animationBackground.forEach((anim, i) => {
            if (!anim.keyframes) {
                errors.push(`animationBackground at index ${i} is missing keyframes.`);
            }
        });
    }

    if (errors.length > 0) {
        console.error("Validation errors:", errors);
        return false;
    }
    return true;
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
    if (profileData.buttonThemeEnable !== 1) {
        document.querySelectorAll("a").forEach(link => {
            link.style.color = theme.textColor;
        });
        document.querySelectorAll("a:hover").forEach(link => {
            link.style.color = theme.linkHoverColor;
        });
    }
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
    themeToggle.tabIndex = 1;

    themeToggle.addEventListener("mouseover", () => {
        themeToggle.style.backgroundColor = theme.buttonHoverBackground;
        themeToggle.style.boxShadow = `0 0 10px ${theme.buttonHoverBackground}`;
    });
    themeToggle.addEventListener("mouseout", () => {
        themeToggle.style.backgroundColor = theme.buttonBackground;
        themeToggle.style.boxShadow = `0 0 10px ${theme.buttonBackground}`;
    });

    // Apply the new property articleHoverBoxShadow
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        article:hover {
            box-shadow: ${theme.articleHoverBoxShadow};
        }
    `, styleSheet.cssRules.length);

    // Apply scrollbar styles
    styleSheet.insertRule(`
        ::-webkit-scrollbar {
            width: 12px;
        }
    `, styleSheet.cssRules.length);
    styleSheet.insertRule(`
        ::-webkit-scrollbar-track {
            background: ${theme.background};
            border-radius: 10px;
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
        }
    `, styleSheet.cssRules.length);
    styleSheet.insertRule(`
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(45deg, ${theme.buttonBackground}, ${theme.buttonHoverBackground});
            border-radius: 10px;
            border: 3px solid ${theme.background};
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
        }
    `, styleSheet.cssRules.length);
    styleSheet.insertRule(`
        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(45deg, ${theme.buttonHoverBackground}, ${theme.buttonBackground});
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
    if (document.body.classList.contains("dark-theme") || theme.darkTheme) {
        iconElement.name = "moon-outline";
    } else {
        iconElement.name = "sunny-outline";
    }
}

function loadThemeConfig(theme) {
    applyTheme(theme);
    setIconBasedOnTheme(theme);
}

function toggleTheme(theme) {
    const currentTheme = document.body.classList.contains("dark-theme") ? theme : theme.opposite;
    document.body.classList.toggle("dark-theme");
    applyTheme(currentTheme);
    setIconBasedOnTheme(currentTheme);
    setCookie("theme", document.body.classList.contains("dark-theme") ? "dark" : "light", 365);
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
    const maxLabelNumber = 7;
    if (!profileData.labels || !profileData.labels.length) {
        console.warn("No labels found in profile data.");
    } else if (profileData.labels.length > maxLabelNumber) {
        console.warn(`Too many labels found in profile data, only the first ${maxLabelNumber} will be displayed.`);
    }
    const container = document.createElement("div");
    container.className = "label-buttons-container";

    profileData.labels.slice(0, maxLabelNumber).forEach(label => {
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
function applyFirstTheme(theme) {
    const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = getCookie("theme");

    console.log("Dark theme media quary:", darkThemeMediaQuery.matches);

    if (savedTheme) {
        if (savedTheme === "dark") {
            loadThemeConfig(theme.darkTheme ? theme : theme.opposite);
            document.body.classList.add("dark-theme");
        } else {
            loadThemeConfig(theme.darkTheme ? theme.opposite : theme);
        }
    } else {
        if (darkThemeMediaQuery.matches) {
            if (theme.darkTheme) {
                loadThemeConfig(theme);
            } else {
                loadThemeConfig(theme.opposite);
                document.body.classList.add("dark-theme");
            }
        } else {
            if (theme.darkTheme) {
                loadThemeConfig(theme.opposite);
                document.body.classList.add("dark-theme");
            } else {
                loadThemeConfig(theme);
            }
        }
    }
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function createIconList(profileData) {
    const maxIconNumber = 10;
    const iconList = document.createElement("div");
    iconList.className = "icon-list";

    if (!profileData.socialIcon || !profileData.socialIcon.length) {
        console.warn("No social icons found in profile data.");
    } else if (profileData.socialIcon.length > maxIconNumber) {
        console.warn(`Too many social icons found in profile data, only the first ${maxIconNumber} will be displayed.`);
    }

    profileData.socialIcon.slice(0, maxIconNumber).forEach(iconData => {
        const iconItem = document.createElement("div");
        iconItem.className = "icon-item";

        const iconImg = document.createElement("img");
        iconImg.src = `./contents/images/icons/${iconData.icon.toLowerCase().replace(/ /g, '-')}.svg`;
        iconImg.alt = iconData.icon;

        const iconLink = document.createElement("a");
        iconLink.href = iconData.url;
        iconLink.target = "_blank";

        iconLink.appendChild(iconImg);
        iconItem.appendChild(iconLink);
        iconList.appendChild(iconItem);
    });

    if (profileData.socialIcon.length === 0) {
        iconList.style.display = "none";
    }

    const article = document.getElementById("profile-article");
    article.appendChild(iconList);
}

function createStatusBar(profileData) {
    const maxCaracter = 25;
    const circleStatusBar = document.createElement("div");
    circleStatusBar.className = "circle-status-bar";
    circleStatusBar.style.border = `10px solid ${profileData.statusbar.borderColor}`;
    circleStatusBar.style.backgroundColor = profileData.statusbar.colorBg;
    circleStatusBar.style.transition = "transform 0.3s ease-in-out"; // Add animation

    const statusBarText = document.createElement("div");
    statusBarText.className = "statusBarText";
    statusBarText.textContent = profileData.statusbar.text.substring(0, maxCaracter);
    if (profileData.statusbar.text.length > maxCaracter) {
        statusBarText.textContent += "...";
        console.warn("Status bar text is too long, it will be truncated.");
    }
    statusBarText.style.color = profileData.statusbar.colorText;
    circleStatusBar.appendChild(statusBarText);

    if (!profileData.statusbar.text.trim()) {
        circleStatusBar.style.display = "none";
    }

    const article = document.querySelector("article");
    article.appendChild(circleStatusBar);

    // Add hover effect for animation
    circleStatusBar.addEventListener("mouseover", () => {
        circleStatusBar.style.transform = "scale(1.1)";
        statusBarText.style.display = "block";
        circleStatusBar.style.width = "fit-content";
        circleStatusBar.style.borderRadius = "20px";
        circleStatusBar.style.border = "none";
        if (profileData.statusbar.fontTextColor === 0) {
            circleStatusBar.style.backgroundColor = profileData.statusbar.colorBg;
        } else if (profileData.statusbar.fontTextColor === 1) {
            circleStatusBar.style.backgroundColor = profileData.statusbar.borderColor;
        } else {
            console.error("Invalid fontTextColor value: ", profileData.statusbar.fontTextColor, "; Expected 0 or 1.");
            circleStatusBar.style.background = "none";
        }
        circleStatusBar.style.padding = "5px";
    });
    circleStatusBar.addEventListener("mouseout", () => {
        circleStatusBar.style.transform = "scale(1)";
        statusBarText.style.display = "none";
        circleStatusBar.style.width = "50px";
        circleStatusBar.style.borderRadius = "50%";
        circleStatusBar.style.border = `10px solid ${profileData.statusbar.borderColor}`;
        circleStatusBar.style.backgroundColor = profileData.statusbar.colorBg;
        circleStatusBar.style.padding = "0";
        circleStatusBar.style.width = "28px";
    });
}