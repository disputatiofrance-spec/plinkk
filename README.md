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
- `contents/js/animation.js` : Contient les configurations des animations.
- `contents/js/init.js` : Initialisation et application des configurations.

## Comment modifier le projet pour vous-même

1. **Cloner le dépôt :**

    ```sh
    git clone https://github.com/Klaynight-dev/links_website_template.git
    cd links_website_template
    ```

2. **Modifier les informations de profil :**
    - Ouvrez `contents/js/profileConfig.js` et modifiez les valeurs de l'objet `profileData` :
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
    - `selectedThemeIndex`: Index du thème sélectionné.
    - `selectedAnimationIndex`: Index de l'animation de l'article.
    - `selectedAnimationButtonIndex`: Index de l'animation des boutons.
    - `selectedAnimationBackgroundIndex`: Index de l'animation de l'arrière-plan.
    - `EnableAnimationArticle`: Activer ou désactiver l'animation de l'article (1 pour activer, 0 pour désactiver).
    - `EnableAnimationButton`: Activer ou désactiver l'animation des boutons (1 pour activer, 0 pour désactiver).
    - `EnableAnimationBackground`: Activer ou désactiver l'animation de l'arrière-plan (1 pour activer, 0 pour désactiver).
    - `animationDurationBackground`: Durée de l'animation de l'arrière-plan en secondes.

    ```js
    const profileData = {
      profileLink: "https://votre-lien.com", // Lien vers votre profil ou site web
      profileImage: "https://votre-image.com/image.jpg", // URL de l'image de profil
      profileIcon: "https://votre-icone.com/icone.png", // URL de l'icône de profil
      profileSiteText: "Votre site", // Texte affiché pour le site
      userName: "Votre Nom", // Votre nom
      email: "votre.email@exemple.com", // Votre adresse email
      links: [
        { icon: "https://votre-icone.com/icone1.png", url: "https://votre-lien1.com", text: "Lien 1" }, // Premier lien
        { icon: "https://votre-icone.com/icone2.png", url: "https://votre-lien2.com", text: "Lien 2" }, // Deuxième lien
        { icon: "https://votre-icone.com/icone3.png", url: "https://votre-lien3.com", text: "Lien 3" }  // Troisième lien
      ],
      backgroundImage: "https://votre-image-de-fond.com/image.jpg", // URL de l'image de fond
      profileHoverColor: "#7289DA", // Couleur de survol du profil
      neonColors: ["#7289DA", "#FF4500", "#00FF00", "#FFD700", "#FF69B4"], // Couleurs néon pour les effets
      selectedThemeIndex: 0, // Thème sélectionné (voir ci-dessous)
      selectedAnimationIndex: 0, // Animation de l'article (voir ci-dessous)
      selectedAnimationButtonIndex: 1, // Animation des boutons (voir ci-dessous)
      selectedAnimationBackgroundIndex: 2, // Animation de l'arrière-plan (voir ci-dessous)
      EnableAnimationArticle: 1, // 1 : Enable, 0 : Disable
      EnableAnimationButton: 1, // 1 : Enable, 0 : Disable
      EnableAnimationBackground: 1, // 1 : Enable, 0 : Disable
      animationDurationBackground: 30 // Durée de l'animation en secondes
    };
    ```

3. **Personnaliser les thèmes :**
    - Vous pouvez ajouter ou modifier les thèmes dans le tableau `themes` dans `contents/js/themeConfig.js` :
    - `background`: Couleur de fond en rgba.
    - `hoverColor`: Couleur de survol des éléments.
    - `textColor`: Couleur du texte.
    - `buttonBackground`: Couleur de fond des boutons.
    - `buttonHoverBackground`: Couleur de fond des boutons au survol.
    - `buttonTextColor`: Couleur du texte des boutons.
    - `linkHoverColor`: Couleur des liens au survol.

    ```js
    const themes = [
      {
        background: "rgba(0, 0, 0, 0.6)", // Couleur de fond
        hoverColor: "#7289DA", // Couleur de survol
        textColor: "white", // Couleur du texte
        buttonBackground: "#2C2F33", // Couleur de fond des boutons
        buttonHoverBackground: "#7289DA", // Couleur de fond des boutons au survol
        buttonTextColor: "white", // Couleur du texte des boutons
        linkHoverColor: "#7289DA" // Couleur des liens au survol
      },
      // Ajoutez d'autres thèmes ici
    ];
    ```

4. **Configurer les animations :**
    - Vous pouvez ajouter ou modifier les animations dans `contents/js/animation.js` :
    - `name`: Nom de l'animation.
    - `keyframes`: Définition des images clés pour l'animation.

    ```js
    const animations = [
      {
        name: "fade",
        keyframes: "fade 1s ease-in-out"
      },
      // Ajoutez d'autres animations ici
    ];
    ```

## Mettre à jour votre fork automatiquement

Pour automatiser la mise à jour de votre fork avec les dernières modifications du dépôt d'origine, vous pouvez configurer un workflow GitHub Actions. Suivez les étapes ci-dessous :

1. **Créer un fichier de workflow** :
    - Dans votre fork, créez un répertoire `.github/workflows` s'il n'existe pas déjà.
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

2. **Configurer le workflow** :
    - Le secret `GITHUB_TOKEN` est automatiquement fourni par GitHub Actions et permet d'authentifier les actions GitHub pour pousser les modifications.

3. **Activer le workflow** :
    - Une fois le fichier `update_fork.yml` ajouté et poussé dans votre fork, le workflow sera automatiquement exécuté selon le planning défini (chaque dimanche à minuit) ou manuellement via l'interface GitHub Actions.

En suivant ces étapes, votre fork sera automatiquement mis à jour avec les dernières modifications du dépôt d'origine tout en conservant vos propres modifications.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.