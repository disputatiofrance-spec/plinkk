const profileData = {
    profileLink: "https://github.com", // Lien du profil 
    profileImage: "https://avatars.githubusercontent.com/u/9919?s=200&v=4", // Image de profil
    profileIcon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", // Icone derrière le profil
    profileSiteText: "GitHub", // Nom derrière le profil
    userName: "GitHub User", // Nom affiché sur la page et dans le titre de l'onglet
    email: "user@github.com", // Adresse mail affichée sur la page
    links: [ // Liens affichés sur la page
        { icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", url: "https://github.com/link1", text: "Link 1", name: "GitHub" },
        { icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", url: "https://github.com/link2", text: "Link 2", name: "Discord" },
        { icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", url: "https://github.com/link3", text: "Link 3", name: "LinkedIn" },
    ],
    // Fond de la page si une liste est utilisée alors le fond sera via les couleurs que vous mettez dedans
    background: ["#FF5733", "#33FF57"], //"https://static.vecteezy.com/ti/vecteur-libre/p1/12697876-motif-geometriquele-continue-noir-et-blanc-motif-repetitif-monochrome-arriere-plan-abstrait-optique-tridimensionnel-avec-cubes-troues-vectoriel.jpg",
    degBackgroundColor: 45, // inclinaison du degradé
    profileHoverColor: "#7289DA", // Couleur de hover sur l'article (l'élément principal)
    neonColors: ["#7289DA", "#FF4500", "#00FF00", "#FFD700", "#FF69B4"], // Couleurs du neon de profil
    iconUrl: "https://avatars.githubusercontent.com/u/9919?s=200&v=4", // Icone de l'onglet
    description: "Mollit laboris cupidatat do enim nulla ex laborum. Nulla labore reprehenderit nisi non anim aute.", // Description affichée sur la page, display: none si vide
    meta: {
        title: "GitHub User - Linktree", // Titre de l'onglet
        description: "Mollit laboris cupidatat do enim nulla ex laborum. Nulla labore reprehenderit nisi non anim aute.", // Description de l'onglet
        keywords: "GitHub, User, Profile, Links, Website, Template, plinkk, klaynight", // Mots-clés de l'onglet
        url: "https://github.com" // URL de l'onglet
    },
    
    labels: [
        { data: "Developer", color: "#FF6384", fontColor: "#FFFFFF" },
        { data: "Designer", color: "#36A2EB", fontColor: "#FFFFFF" },
        { data: "Engineer UI/UX", color: "#4BC0C0", fontColor: "#FFFFFF" },
    ],
    
    neonEnable: 1, // 1 : Enable, 0 : Disable
    buttonThemeEnable: 1, // 1 : Enable, 0 : Disable

    EnableAnimationArticle: 1, // 1ecloudserv.fr : Enable, 0 : Disable
    EnableAnimationButton: 1, // 1 : Enable, 0 : Disable
    EnableAnimationBackground: 1, // 1 : Enable, 0 : Disable

    backgroundSize : 50, // En pourcentage
    
    selectedThemeIndex: 1,                   // Thème sélectionné            (voir ci-dessous)

    selectedAnimationIndex : 0,             // Animation de l'article       (voir ci-dessous)
    selectedAnimationButtonIndex : 10,       // Animation des boutons        (voir ci-dessous)
    selectedAnimationBackgroundIndex: 0,     // Animation de l'arrière-plan  (voir ci-dessous)

    animationDurationBackground: 30,  // Durée de l'animation en secondes
    delayAnimationButton: 0.1,        // Délai de l'animation en secondes

    canvaEnable: 1, // 1 : Enable, 0 : Disable
    selectedCanvasIndex: 12,          // Animation du canva (voir ci-dessous)
};
//      Thèmes      \\
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

//      Animations      \\
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
// 10 : Clignoter
// 11 : Bande de caoutchouc
// 12 : Tada
// 13 : Gélatineux
// 14 : Battement de coeur
// 15 : Vitesse de la lumière
// 16 : Rouler
// 17 : Charnière

//      Canva Animations      \\
// 0 : Bubble
// 1 : Neuronal
// 2 : Particule
// 3 : Stars Array
// 4 : Snow 
// 5 : Galaxy
// 6 : Hexagone
// 7 : Confetti
// 8 : Fireworks
// 9 : Boom CLick
// 10 : Crowd
// 11 : Storm
// 12 : Color Wars
// 13 : Liquid Light
// 14 : Rain
// 15 : Matrix
// 16 : Purple Tree
// 17 : Cloud
// 18 : Space