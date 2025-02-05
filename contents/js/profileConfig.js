const profileData = {
    profileLink: "https://github.com", // Lien du profil 
    profileImage: "https://avatars.githubusercontent.com/u/9919?s=200&v=4", // Image de profil
    profileIcon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", // Icone derrière le profil
    profileSiteText: "GitHub", // Nom derrière le profil
    userName: "GitHub User", // Nom affiché sur la page et dans le titre de l'onglet
    email: "user@github.com", // Adresse mail affichée sur la page
    links: [ // Liens affichés sur la page
        { icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", url: "https://github.com/link1", text: "Link 1" },
        { icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", url: "https://github.com/link2", text: "Link 2" },
        { icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", url: "https://github.com/link3", text: "Link 3" }
    ],
    // Image de fond
    backgroundImage: "https://static.vecteezy.com/ti/vecteur-libre/p1/12697876-motif-geometriquele-continue-noir-et-blanc-motif-repetitif-monochrome-arriere-plan-abstrait-optique-tridimensionnel-avec-cubes-troues-vectoriel.jpg",
    profileHoverColor: "#7289DA", // Couleur de hover sur l'article (l'élément principal)
    neonColors: ["#7289DA", "#FF4500", "#00FF00", "#FFD700", "#FF69B4"], // Couleurs du neon de profil
    neonEnable: 1, // 1 : Enable, 0 : Disable
    iconUrl: "https://avatars.githubusercontent.com/u/9919?s=200&v=4", // Icone de l'onglet
    
    EnableAnimationArticle: 1, // 1 : Enable, 0 : Disable
    EnableAnimationButton: 1, // 1 : Enable, 0 : Disable
    EnableAnimationBackground: 1, // 1 : Enable, 0 : Disable

    backgroundSize : 50, // En pourcentage
    
    selectedThemeIndex: 5,                   // Thème sélectionné            (voir ci-dessous)

    selectedAnimationIndex : 13,             // Animation de l'article       (voir ci-dessous)
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

//      Canva Animations      \\
// 0  : Bulles
// 1  : Neurones
// 2  : Particules
// 3  : Etoiles Filantes
// 4  : Snow
// 5  : Galaxie
// 6  : Hexagone
// 7  : Rotation
// 8  : Confetti
// 9  : Feux d'artifice
// 10 : Boom Click
// 11 : Foule
// 12 : Color Wars
// 13 : Liquides Lumineux