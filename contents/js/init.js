document.addEventListener("DOMContentLoaded", function () { 
    const article = document.getElementById("profile-article");
    article.appendChild(createProfileContainer(profileData));
    article.appendChild(createUserName(profileData));
    article.appendChild(createEmailDiv(profileData));
    createLinkBoxes(profileData).forEach(box => article.appendChild(box));

    applyDynamicStyles(profileData, styleSheet, profileData.selectedAnimationBackgroundIndex % animations.length, profileData.EnableAnimationBackground, profileData.animationDurationBackground);
    applyTheme(themes[profileData.selectedThemeIndex % themes.length -1]);
    applyAnimation(animations[profileData.selectedAnimationIndex % animations.length], profileData.EnableAnimationArticle, profileData.EnableAnimationBackground);
    applyAnimationButton(animations[profileData.selectedAnimationButtonIndex % animations.length], profileData.EnableAnimationButton);

    document.title = profileData.userName + " - Linktree";
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = profileData.iconUrl;
    document.head.appendChild(link);

    const footer = document.createElement("footer");
    footer.innerHTML = 'Design with ❤️ by <a href="http://klaynight.fr" target="_blank" rel="noopener noreferrer">Klaynight Studio©</a> & Pacman';
    Object.freeze(footer);
    document.body.appendChild(footer);
});

// Ensure profileData is a valid JSON string before parsing
if (typeof profileData === 'string') {
    try {
        profileData = JSON.parse(profileData);
    } catch (e) {
        console.error("Invalid JSON data:", e);
    }
}
document.body.offsetHeight;