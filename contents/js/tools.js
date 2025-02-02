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

function applyDynamicStyles(profileData, styleSheet) {
    document.body.style.backgroundImage = `url(${profileData.backgroundImage})`;

    styleSheet.insertRule(`
    .profile-container:hover .profile-pic {
        transform: rotateY(180deg);
        box-shadow: 0 0 50px ${profileData.profileHoverColor};
    }
    `, styleSheet.cssRules.length);

    const neonGradient = profileData.neonColors.join(", ");
    styleSheet.insertRule(`
    .profile-pic-wrapper::after, .profile-pic-wrapper::before {
        background: linear-gradient(45deg, ${neonGradient});
    }
    `, styleSheet.cssRules.length);
}

function applyTheme(theme) {
    const article = document.getElementById("profile-article");
    article.style.background = theme.background;
    article.style.color = theme.textColor;
    document.querySelectorAll(".discord-box").forEach(box => {
    box.style.backgroundColor = theme.buttonBackground;
    box.style.color = theme.buttonTextColor;
    });
    document.querySelectorAll(".discord-box:hover").forEach(box => {
    box.style.backgroundColor = theme.buttonHoverBackground;
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
}

function applyAnimation(animation) {
    const article = document.getElementById("profile-article");
    article.style.animation = animation.keyframes;
}
function applyAnimationButton(animation) {
    const articleChildren = document.querySelectorAll("#profile-article > *");
    articleChildren.forEach(child => {
    child.style.animation = animation.keyframes;
    });
}