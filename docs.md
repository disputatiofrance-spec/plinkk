# Documentation de Personnalisation

Ce document explique comment personnaliser votre propre page en utilisant les fichiers de configuration disponibles dans le projet.

En suivant cette documentation, vous pouvez personnaliser votre propre page en modifiant les fichiers de configuration et en ajoutant de nouveaux éléments tels que des thèmes, des animations, des icônes, etc. N'hésitez pas à explorer les fichiers de configuration et à expérimenter avec différentes options pour créer une page unique et attrayante.

## Structure du Projet

- `index.html` : Le fichier principal contenant la structure HTML et les styles CSS.
- `contents/js/config/profileConfig.js` : Contient les données de configuration du profil.
- `contents/js/config/themeConfig.js` : Contient les configurations des thèmes.
- `contents/js/config/animationConfig.js` : Contient les configurations des animations.
- `contents/js/config/canvaConfig.js` : Contient les configurations des animations de canvas.
- `contents/js/config/btnIconThemeConfig.js` : Contient les configurations des icônes de boutons.
- `contents/js/tools.js` : Contient les fonctions utilitaires pour créer et appliquer les éléments de la page.
- `contents/js/init.js` : Initialisation et application des configurations.

## Modifier les Informations de Profil

Ouvrez [profileConfig.js](contents/js/config/profileConfig.js) et modifiez les valeurs de l'objet `profileData` :

- `profileLink`: Lien vers votre profil ou site web.
- `profileImage`: URL de l'image de profil.
- `profileIcon`: URL de l'icône de profil.
- `profileSiteText`: Texte affiché pour le site.
- `userName`: Votre nom.
- `links`: Liste de liens avec icônes, URL et texte descriptif.
    - `icon`: URL de l'icône du lien.
    - `url`: URL du lien.
    - `text`: Texte descriptif du lien.
    - `name`: Nom du site que vous voulez mettre, actif si `buttonThemeEnable` est activé, met l'icon du site/app et le thème lié au button.
- `background`: URL de l'image de fond ou tableau de couleurs pour un dégradé.
- `degBackgroundColor`: Inclinaison du dégradé de fond.
- `profileHoverColor`: Couleur de survol du profil.
- `neonColors`: Couleurs néon pour les effets.
- `neonEnable`: Activer ou désactiver les effets néon (1 pour activer, 0 pour désactiver).
- `iconUrl`: URL de l'icône de l'onglet.
- `description`: Description de votre profil.
- `buttonThemeEnable`: Permet de basculer du mode sensible au thème de la page à thème du button configuré dans `links.name`.
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
- `selectedCanvasIndex`: Index de l'animation de canvas sélectionnée.

## Personnaliser les Thèmes

Vous pouvez ajouter ou modifier les thèmes dans le tableau [themes](contents/js/config/themeConfig.js) :

- `background`: Couleur de fond en rgba.
- `hoverColor`: Couleur de survol des éléments.
- `textColor`: Couleur du texte.
- `buttonBackground`: Couleur de fond des boutons.
- `buttonHoverBackground`: Couleur de fond des boutons au survol.
- `buttonTextColor`: Couleur du texte des boutons.
- `linkHoverColor`: Couleur des liens au survol.
- `articleHoverBoxShadow`: Ombre portée de l'article au survol.
- `darkTheme`: Indique si le thème est sombre.
- `opposite`: Configuration du thème opposé.

Exemple :
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
        articleHoverBoxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        darkTheme: true,
        opposite: {
            background: "rgba(255, 255, 255, 0.6)",
            hoverColor: "#7289DA",
            textColor: "black",
            buttonBackground: "#7289DA",
            buttonHoverBackground: "#2C2F33",
            buttonTextColor: "white",
            linkHoverColor: "#2C2F33",
            articleHoverBoxShadow: "0px 4px 8px rgba(255, 255, 255, 0.3)"
        }
    },
    // Ajoutez d'autres thèmes ici
];
```

## Configurer les Animations

Vous pouvez ajouter ou modifier les animations dans [animationConfig.js](contents/js/config/animationConfig.js) :

- `name`: Nom de l'animation.
- `keyframes`: Définition des images clés pour l'animation.

Exemple :
```js
const animations = [
    {
        name: "fade",
        keyframes: "fade 1s ease-in-out"
    },
    // Ajoutez d'autres animations ici
];

styleSheet.insertRule(` // Ne pas oublier cette partie car si non pas d'animation
@keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
}
`, styleSheet.cssRules.length);
```

## Ajouter des Animations de Canvas

Vous pouvez ajouter ou modifier les animations de canvas dans [canvaConfig.js](contents/js/config/canvaConfig.js) :

- `animationName`: Nom de l'animation.
- `fileNames`: Nom du fichier JavaScript contenant l'animation.
- `extension`: URL des bibliothèques externes nécessaires pour l'animation. À ajouter à la suite des scripts dans le `index.html`.

Exemple :
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

Pour ajouter une animation canva, il vous faut vous rendre dans le dossier `contents/js/canvaAnimation` puis créer un fichier `.js` avec le nom que vous souhaitez puis le renseigner dans `canvaData`. Il faut bien entendu modifier la valeur de `profileData.selectedCanvasIndex`.

## Ajouter des Icônes de Boutons

Vous pouvez ajouter ou modifier les icônes de boutons dans [btnIconThemeConfig.js](contents/js/config/btnIconThemeConfig.js) :

- `name`: Nom de l'icône.
- `icon`: Chemin de l'icône.
- `themeClass`: Classe CSS pour le thème de l'icône.
- `alt`: Texte alternatif pour l'icône.

Exemple :
```js
const btnIconThemeConfig = [
    {
        name: "GitHub",
        icon: "contents/images/icons/github.svg",
        themeClass: "button-github",
        alt: "GitHub"
    },
    // Ajoutez d'autres icônes ici
];
```
## Modifier les Méta Données

Les méta données sont des informations incluses dans la section `<head>` de votre fichier HTML. Elles fournissent des informations sur la page web aux moteurs de recherche et aux navigateurs. Vous pouvez modifier les méta données dans le fichier `index.html` pour personnaliser les informations affichées lorsque votre page est partagée ou indexée.

### Types de Méta Données

- `title`: Le titre de la page affiché dans l'onglet du navigateur.
- `description`: Une brève description de la page pour les moteurs de recherche.
- `keywords`: Une liste de mots-clés pertinents pour le contenu de la page.
- `og:type`: Le type de contenu pour Open Graph (utilisé par les réseaux sociaux).
- `og:url`: L'URL de la page.
- `og:title`: Le titre de la page pour Open Graph.
- `og:description`: La description de la page pour Open Graph.
- `og:image`: L'image de prévisualisation pour Open Graph.
- `twitter:card`: Le type de carte Twitter à utiliser.
- `twitter:url`: L'URL de la page pour Twitter.
- `twitter:title`: Le titre de la page pour Twitter.
- `twitter:description`: La description de la page pour Twitter.
- `twitter:image`: L'image de prévisualisation pour Twitter.
- `twitter:image:alt`: Le texte alternatif pour l'image Twitter.
- `theme-color`: La couleur du thème pour les navigateurs mobiles.
- `author`: L'auteur de la page.
- `robots`: Les directives pour les robots des moteurs de recherche.
- `viewport`: Les paramètres de mise en page pour les appareils mobiles.
- `charset`: Le jeu de caractères utilisé par la page.

### Exemple de Modification

Pour modifier les méta données, ouvrez le fichier `index.html` et modifiez les balises `<meta>` correspondantes. Par exemple, pour changer le titre et la description :

```html
<head>
    <title>Votre Nouveau Titre</title>
    <meta name="description" content="Votre nouvelle description de la page">
    <!-- Autres méta données -->
</head>
```
## Fonctions Utilitaires

Les fonctions utilitaires dans [tools.js](contents/js/tools.js) permettent de créer et d'appliquer les éléments de la page.

### `createProfileContainer(profileData)`

Crée le conteneur de profil avec l'image, le lien et le texte du profil.

### `createUserName(profileData)`

Crée l'élément `h1` pour le nom d'utilisateur.

### `createEmailAndDescription(profileData)`

Crée le conteneur pour l'email et la description du profil.

### `addEmailStyles()`

Ajoute les styles CSS pour l'email.

### `createLinkBoxes(profileData)`

Crée les boîtes de liens avec les icônes et les textes des liens.

### `applyDynamicStyles(profileData, styleSheet, selectedAnimationBackgroundIndex, EnableAnimationBackground, animationDurationBackground, useCanvas, selectedCanvasIndex)`

Applique les styles dynamiques pour le fond, les animations et les effets néon.

### `setBackgroundStyles(profileData)`

Définit les styles de fond en fonction des configurations.

### `applyTheme(theme)`

Applique le thème sélectionné aux éléments de la page.

### `applyAnimation(animation, animationEnabled)`

Applique l'animation sélectionnée à l'article.

### `applyAnimationButton(animation, animationButtonEnabled, delayAnimationButton)`

Applique l'animation sélectionnée aux boutons avec un délai.

### `setIconBasedOnTheme(theme)`

Définit l'icône en fonction du thème sélectionné.

### `loadThemeConfig(theme)`

Charge la configuration du thème et applique les styles.

### `toggleTheme(theme)`

Bascule entre le thème actuel et le thème opposé.

### `createToggleThemeButton(theme)`

Crée un bouton pour basculer entre les thèmes.

### `createLabelButtons(profileData)`

Crée les boutons d'étiquettes avec les couleurs et les textes configurés.