const selectedAnimationIndex = 0; // Change this value to select a different animation
const selectedAnimationButtonIndex =9;
// 0 : Fondu
// 1 : Glisser
// 2 : Zoomer
// 3 : Rotation
// 4 : Rebondir
// 5 : Secouer
// 6 : Retourner
// 7 : Pulsation
// 8 : Balancer
// 9 : Se balancer


const selectedThemeIndex = 6; // Changez cette valeur pour sélectionner un autre thème
    // 0 : Grey Theme
    // 1 : Light Yellow Theme
    // 2 : Green Theme
    // 3 : Blue Theme
    // 4 : Red Theme
    // 5 : Light blue Theme
    // 6 : Dark Theme
    // 7 : Orange Theme
    // 8 : Grey Dark Theme
    // 9 : Green Grey Theme
    // 10 : Very Light Blue Theme
    // 11 : Brown Theme
    // 12 : Purple Theme
    // 13 : Pink Theme
    // 14 : Neptune Theme (Light Brown Theme)

const profileData = {
    profileLink: "https://github.com",
    profileImage: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
    profileIcon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    profileSiteText: "GitHub",
    userName: "GitHub User",
    email: "user@github.com",
    links: [
        { icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", url: "https://github.com/link1", text: "Link 1" },
        { icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", url: "https://github.com/link2", text: "Link 2" },
        { icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", url: "https://github.com/link3", text: "Link 3" }
    ],
    backgroundImage: "https://static.vecteezy.com/ti/vecteur-libre/p1/12697876-motif-geometriquele-continue-noir-et-blanc-motif-repetitif-monochrome-arriere-plan-abstrait-optique-tridimensionnel-avec-cubes-troues-vectoriel.jpg",
    profileHoverColor: "#7289DA",
    neonColors: ["#7289DA", "#FF4500", "#00FF00", "#FFD700", "#FF69B4"],
    iconUrl: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
    EnableAnimation: 1, // 1 : Enable, 0 : Disable
    EnableAnimationButton: 1 // 1 : Enable, 0 : Disable
};

function setTheme(index) {
    if (index >= 0 && index < themes.length) {
        selected = index;
        const theme = themes[selected];
        document.body.style.background = theme.background;
        document.body.style.color = theme.textColor;
        // Additional theme application logic here
    }
}