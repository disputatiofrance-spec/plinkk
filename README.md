# Links Website Template

Ce projet est un modèle de site web de liens, conçu pour afficher des informations de profil et des liens vers divers sites web. Il utilise HTML, CSS et JavaScript pour créer une interface utilisateur attrayante et interactive.

## Fonctionnalités

- Affichage d'une image de profil avec un effet de pivot
- Liens vers des sites web externes
- Thèmes personnalisables
- Effets d'animation et de survol
- Animations configurables pour les articles, les boutons et l'arrière-plan

## Structure du projet

- `index.html` : Le fichier principal contenant la structure HTML et les styles CSS.
- `contents/js/profileConfig.js` : Contient les données de configuration du profil.
- `contents/js/themeConfig.js` : Contient les configurations des thèmes.
- `contents/js/animationConfig.js` : Contient les configurations des animations.
- `contents/js/init.js` : Initialisation et application des configurations.

## Comment modifier le projet pour vous-même

1. **Cloner le dépôt :**

    ```sh
    git clone https://github.com/Klaynight-dev/links_website_template.git
    cd links_website_template
    ```

2. **Modifier les informations de profil :**
  *- Ouvrez [profileConfig.js](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/profileConfig.js) et modifiez les valeurs de l'objet `profileData` :
    - `profileLink`: Lien vers votre profil ou site web.
    - `profileImage`: URL de l'image de profil.
    - `profileIcon`: URL de l'icône de profil.
    - `profileSiteText`: Texte affiché pour le site.
    - `userName`: Votre nom.
    - `email`: Votre adresse email.
    - `links`: Liste de liens avec icônes, URL et texte descriptif.
    - `backgroundImage`: URL de l'image de fond.
    - `profileHoverColor`: Couleur de survol du profil.
    - `neonColors`: Couleurs néon pour les effets.
    - `neonEnable`: Activer ou désactiver les effets néon (1 pour activer, 0 pour désactiver).
    - `iconUrl`: URL de l'icône.
    - `description`: Description de votre profil.
    - `meta`: Métadonnées pour le SEO.
      - `title`: Titre de la page.
      - `description`: Description de la page.
      - `keywords`: Mots-clés pour le SEO.
      - `url`: URL de la page.
    - `EnableAnimationArticle`: Activer ou désactiver l'animation de l'article (1 pour activer, 0 pour désactiver).
    - `EnableAnimationButton`: Activer ou désactiver l'animation des boutons (1 pour activer, 0 pour désactiver).
    - `EnableAnimationBackground`: Activer ou désactiver l'animation de l'arrière-plan (1 pour activer, 0 pour désactiver).
    - `backgroundSize`: Taille de l'image de fond.
    - `selectedThemeIndex`: Index du thème sélectionné.
    - `selectedAnimationIndex`: Index de l'animation de l'article.
    - `selectedAnimationButtonIndex`: Index de l'animation des boutons.
    - `selectedAnimationBackgroundIndex`: Index de l'animation de l'arrière-plan.
    - `animationDurationBackground`: Durée de l'animation de l'arrière-plan en secondes.
    - `delayAnimationButton`: Délai avant le début de l'animation des boutons.
    - `canvaEnable`: Activer ou désactiver les animations de canvas (1 pour activer, 0 pour désactiver).
    - `selectedCanvasIndex`: Index de l'animation de canvas sélectionnée.*

    ```js
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
        description: "Mollit laboris cupidatat do enim nulla ex laborum. Nulla labore reprehenderit nisi non anim aute.", // Description affichée sur la page, display: none si vide
        meta: {
            title: "GitHub User - Linktree", // Titre de l'onglet
            description: "GitHub User's Linktree", // Description de l'onglet
            keywords: "GitHub, User, Profile, Links, Website, Template, plinkk, klaynight", // Mots-clés de l'onglet
            url: "https://github.com" // URL de l'onglet
        },
        
        EnableAnimationArticle: 1, // 1 : Enable, 0 : Disable
        EnableAnimationButton: 1, // 1 : Enable, 0 : Disable
        EnableAnimationBackground: 1, // 1 : Enable, 0 : Disable

        backgroundSize : 50, // En pourcentage
        
        selectedThemeIndex: 5,                   // Thème sélectionné            (voir ci-dessous)

        selectedAnimationIndex : 0,             // Animation de l'article       (voir ci-dessous)
        selectedAnimationButtonIndex : 10,       // Animation des boutons        (voir ci-dessous)
        selectedAnimationBackgroundIndex: 0,     // Animation de l'arrière-plan  (voir ci-dessous)

        animationDurationBackground: 30,  // Durée de l'animation en secondes
        delayAnimationButton: 0.1,        // Délai de l'animation en secondes

        canvaEnable: 1, // 1 : Enable, 0 : Disable
        selectedCanvasIndex: 12,          // Animation du canva (voir ci-dessous)
    };
    ```

3. **Personnaliser les thèmes :**
  - Vous pouvez ajouter ou modifier les thèmes dans le tableau [themes](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/themeConfig.js) :
    - [background](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/themeConfig.js#L5): Couleur de fond en rgba.
    - [hoverColor](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/themeConfig.js#L6): Couleur de survol des éléments.
    - [textColor](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/themeConfig.js#L7): Couleur du texte.
    - [buttonBackground](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/themeConfig.js#L8): Couleur de fond des boutons.
    - [buttonHoverBackground](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/themeConfig.js#L9): Couleur de fond des boutons au survol.
    - [buttonTextColor](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/themeConfig.js#L10): Couleur du texte des boutons.
    - [linkHoverColor](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/themeConfig.js#L11): Couleur des liens au survol.
    - [opposite](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/themeConfig.js#L12): Configuration du thème opposé.

    ```js
    const themes = [
    {
    background: "rgba(0, 0, 0, 0.6)",
    hoverColor: "#7289DA",
    textColor: "white",
    buttonBackground: "#2C2F33",
    buttonHoverBackground: "#7289DA",
    buttonTextColor: "white",
    linkHoverColor: "#7289DA",
    opposite: {
      background: "rgba(255, 255, 255, 0.6)",
      hoverColor: "#7289DA",
      textColor: "white",
      buttonBackground: "#7289DA",
      buttonHoverBackground: "#2C2F33",
      buttonTextColor: "black",
      linkHoverColor: "#2C2F33"
    }
    },
    // Ajoutez d'autres thèmes ici
    ];
    ```

4. **Configurer les animations :**
    - Vous pouvez ajouter ou modifier les animations dans [animationConfig.js](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/animationConfig.js) :
    - [name](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/animationConfig.js#L5): Nom de l'animation.
    - [keyframes](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/animationConfig.js#L6): Définition des images clés pour l'animation.
    ```js
        const animations = [
          {
          name: "fade",
          keyframes: "fade 1s ease-in-out"
          },
          // Ajoutez d'autres animations ici
        ];
    ```

5. **Ajouter des animations de canvas :**
    - Vous pouvez ajouter ou modifier les animations de canvas dans [canvaConfig.js](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/canvaConfig.js) :
      - [animationName](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/canvaConfig.js#L5): Nom de l'animation.
      - [fileNames](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/canvaConfig.js#L6): Nom du fichier JavaScript contenant l'animation.
      - [extension](https://github.com/Klaynight-dev/links_website_template/blob/main/contents/js/config/canvaConfig.js#L7): URL des bibliothèques externes nécessaires pour l'animation.

      ```js
      const canvaData = [
        {
        animationName: 'Confetti',
        fileNames: 'confetti.js',
        extension: 'none',
        },
        // Ajoutez d'autres animations ici
      ];
      ```

## Mettre à jour votre fork automatiquement

Pour automatiser la mise à jour de votre fork avec les dernières modifications du dépôt d'origine, vous pouvez configurer un workflow GitHub Actions. Suivez les étapes ci-dessous :

1. **Créer un fichier de workflow** :
    - Dans votre fork, créez un répertoire [workflows](https://github.com/Klaynight-dev/links_website_template/blob/main/workflow) s'il n'existe pas déjà.
    - Ajoutez un fichier nommé `update_fork.yml` dans ce répertoire avec le contenu suivant :

    ```yaml
    name: Update Fork

    on:
      schedule:
        - cron: '0 0 * * 0' # Exécuter chaque dimanche à minuit
      workflow_dispatch:

    jobs:
      update-fork:
        runs-on: ubuntu-latest

        steps:
          - name: Checkout repository
            uses: actions/checkout@v2

          - name: Set up Git
            run: |
              git config --global user.name 'github-actions'
              git config --global user.email 'github-actions@github.com'

          - name: Add upstream remote
            run: git remote add upstream https://github.com/Klaynight-dev/links_website_template.git

          - name: Fetch upstream
            run: git fetch upstream

          - name: Merge upstream changes
            run: |
              git checkout main
              git merge upstream/main

          - name: Push changes
            env:
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
            run: git push origin main
    ```

2. **Configurer  workflowle** :
    - Le secret `GITHUB_TOKEN` est automatiquement fourni par GitHub Actions et permet d'authentifier les actions GitHub pour pousser les modifications.

3. **Activer le workflow** :
    - Une fois le fichier `update_fork.yml` ajouté et poussé dans votre fork, le workflow sera automatiquement exécuté selon le planning défini (chaque dimanche à minuit) ou manuellement via l'interface GitHub Actions.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.