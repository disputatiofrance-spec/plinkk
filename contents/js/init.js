document.addEventListener("DOMContentLoaded", function () {
    const article = document.getElementById("profile-article");
    article.appendChild(createProfileContainer(profileData));
    article.appendChild(createUserName(profileData));
    article.appendChild(createEmailDiv(profileData));
    createLinkBoxes(profileData).forEach(box => article.appendChild(box));

    applyDynamicStyles(profileData, styleSheet);
    applyTheme(themes[selectedThemeIndex]);
    applyAnimation(animations[selectedAnimationIndex], profileData.EnableAnimation);
    applyAnimationButton(animations[selectedAnimationButtonIndex], profileData.EnableAnimationButton);

    document.title = profileData.userName + " - Linktree";
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = profileData.iconUrl;
    document.head.appendChild(link);
    
});

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.createElement("footer");
    footer.innerHTML = 'Design with ❤️ by <a href="http://klaynight.fr" target="_blank" rel="noopener noreferrer">Klaynight Studio©</a> & Pacman';
    Object.freeze(footer);
    document.body.appendChild(footer);
});
document.body.offsetHeight;