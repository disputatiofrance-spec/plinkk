document.addEventListener("DOMContentLoaded", function () {
    // Ensure profileData is a valid JSON string before parsing
    if (typeof profileData === 'string') {
        try {
            profileData = JSON.parse(profileData);
        } catch (e) {
            console.error("Invalid JSON data:", e);
            return;
        }
    }
    const article = document.getElementById("profile-article");
    article.appendChild(createProfileContainer(profileData));
    article.appendChild(createUserName(profileData));
    createLabelButtons(profileData);
    article.appendChild(createEmailAndDescription(profileData));
    createToggleThemeButton(themes[profileData.selectedThemeIndex % themes.length]);
    createLinkBoxes(profileData).forEach(box => article.appendChild(box));

    applyDynamicStyles(profileData, styleSheet, profileData.selectedAnimationBackgroundIndex % animations.length, profileData.EnableAnimationBackground, profileData.animationDurationBackground, profileData.canvaEnable, profileData.selectedCanvasIndex % canvaData.length);
    applyFirstTheme(themes[profileData.selectedThemeIndex % themes.length]);
    applyAnimation(animations[profileData.selectedAnimationIndex % animations.length], profileData.EnableAnimationArticle, profileData.EnableAnimationBackground);
    applyAnimationButton(animations[profileData.selectedAnimationButtonIndex % animations.length], profileData.EnableAnimationButton, profileData.delayAnimationButton);

    document.title = profileData.userName ? `${profileData.userName} - Linktree` : "Plinkk By Klaynight";
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = profileData.iconUrl;
    document.head.appendChild(link);

    const footer = document.createElement("footer");
    const themeIndex = profileData.selectedThemeIndex % themes.length;
    footer.innerHTML = `Design with ❤️ by <a href="http://klaynight.fr" target="_blank" rel="noopener noreferrer"><p style="color:${themes[themeIndex]?.buttonTextColor || 'defaultColor'};display:inline;padding:2px 2px 2px 4px;border-radius:5px;background-color:${themes[themeIndex]?.buttonBackground || 'defaultColor'};">Klaynight Studio©</p></a> & Pacman`;
    document.body.appendChild(footer);
});