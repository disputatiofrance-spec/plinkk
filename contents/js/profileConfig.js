const selectedAnimationIndex = 0; // Change this value to select a different animation
const selectedAnimationButtonIndex =1;
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


const selectedThemeIndex = 14; // Changez cette valeur pour sélectionner un autre thème
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
    // 14 : Neptune Theme (Light pink theme)

    const profileData = {
        profileLink: "https://discord.gg/uFZXwWdewc",
        profileImage: "https://www.nautiljon.com/images/perso/00/57/bachira_meguru_21375.webp",
        profileIcon: "https://cdn.discordapp.com/icons/1197867213110132748/a_833bd9dc0d68996f7f5a3088697a3e25.png?size=256",
        profileSiteText: "",
        userName: "NeptuneOWO",
        email: "neptune@studio.klaynight.fr",
        links: [
            { icon: "https://tr.rbxcdn.com/30DAY-Avatar-D93F7C7A9A55F82FFEF82E48C6A86E6E-Png/352/352/Avatar/Webp/noFilter",url: "https://www.roblox.com/users/3261357291/profile", text: "roblox" },
            { icon: "https://cliply.co/wp-content/uploads/2021/02/372102690_TIKTOK_LOGO_1080.png",url: "https://www.tiktok.com/@neptuneowo_", text: "tiktok" },
            { icon: "https://cdn.discordapp.com/attachments/1317863719161561179/1335382549765165106/efjz.jpg?ex=679ff76a&is=679ea5ea&hm=1b01411b619ff15ef36ceed583ef950234def5f2eacd446645eab4b0280ba048&",url: "https://discord.gg/5EFfn3pZSt", text: "SL brm5" }
        ],
        backgroundImage: "https://static.vecteezy.com/ti/vecteur-libre/p1/12697876-motif-geometriquele-continue-noir-et-blanc-motif-repetitif-monochrome-arriere-plan-abstrait-optique-tridimensionnel-avec-cubes-troues-vectoriel.jpg",
        profileHoverColor: "",
        neonColors: []
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