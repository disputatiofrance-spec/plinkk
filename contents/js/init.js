// v.test
import { createToggleThemeButton, applyAnimation, applyAnimationButton, applyDynamicStyles, applyFirstTheme } from './assets/styleTools.js';
import { createProfileContainer, createUserName, createStatusBar, createLabelButtons, createIconList, createEmailAndDescription, createLinkBoxes } from './tools.js';
import { initEasterEggs } from './assets/easterEggs.js';
import { profileData } from './config/profileConfig.js';
import { themes } from './config/themeConfig.js';
import { animations, styleSheet } from './config/animationConfig.js';
import { canvaData } from './config/canvaConfig.js';
document.addEventListener("DOMContentLoaded", function () {
    var _a, _b;
    let parsedProfileData = profileData;
    if (typeof profileData === 'string') {
        try {
            parsedProfileData = JSON.parse(profileData);
        }
        catch (e) {
            console.error("Invalid JSON data:", e);
            return;
        }
    }
    // validateProfileConfig(parsedProfileData); // Uncomment if you have a validation function
    if (!parsedProfileData || typeof parsedProfileData !== 'object') {
        console.error("profileData is not defined or is not an object.");
        return;
    }
    const article = document.getElementById("profile-article");
    if (!article) {
        console.error("Element with id 'profile-article' not found.");
        return;
    }
    article.appendChild(createProfileContainer(profileData));
    article.appendChild(createUserName(profileData));
    createStatusBar(profileData);
    createLabelButtons(profileData);
    createIconList(profileData);
    article.appendChild(createEmailAndDescription(profileData));
    if (!themes || !themes.length) {
        console.warn("Themes array is empty or not defined.");
    }
    else {
        createToggleThemeButton(themes[profileData.selectedThemeIndex % themes.length]);
    }
    const linkBoxes = createLinkBoxes(profileData);
    if (!linkBoxes || !linkBoxes.length) {
        console.warn("No link boxes created.");
    }
    else {
        linkBoxes.forEach((box) => article.appendChild(box));
    }
    document.title = profileData.userName ? `${profileData.userName} - Linktree` : "Plinkk By Klaynight";
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = profileData.iconUrl;
    if (!profileData.iconUrl) {
        console.warn("Icon URL is not defined.");
    }
    document.head.appendChild(link);
    const footer = document.createElement("footer");
    const themeIndex = profileData.selectedThemeIndex % themes.length;
    footer.innerHTML = `Design with ❤️ by <a href="http://klaynight.fr" target="_blank" rel="noopener noreferrer"><p style="color:${((_a = themes[themeIndex]) === null || _a === void 0 ? void 0 : _a.buttonTextColor) || 'defaultColor'};display:inline;padding:2px 2px 2px 4px;border-radius:5px;background-color:${((_b = themes[themeIndex]) === null || _b === void 0 ? void 0 : _b.buttonBackground) || 'defaultColor'};">Klaynight Studio©</p></a>`;
    footer.style.zIndex = "9999";
    document.body.appendChild(footer);
    initEasterEggs();
    if (!animations || !animations.length) {
        console.warn("Animations array is empty or not defined.");
    }
    else {
        applyDynamicStyles(profileData, styleSheet, profileData.selectedAnimationBackgroundIndex % animations.length, !!profileData.EnableAnimationBackground, profileData.animationDurationBackground, !!profileData.canvaEnable, profileData.selectedCanvasIndex % canvaData.length);
        applyFirstTheme(themes[profileData.selectedThemeIndex % themes.length]);
        applyAnimation(animations[profileData.selectedAnimationIndex % animations.length], !!profileData.EnableAnimationArticle);
        applyAnimationButton(animations[profileData.selectedAnimationButtonIndex % animations.length], !!profileData.EnableAnimationButton, profileData.delayAnimationButton);
    }
});
