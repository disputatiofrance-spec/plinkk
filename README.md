# Links Website Template

Ce projet est un modèle de site web de liens, conçu pour afficher des informations de profil et des liens vers divers sites web. Il utilise HTML, CSS et JavaScript pour créer une interface utilisateur interactive et attrayante.

## Fonctionnalités

- Affichage d'une image de profil avec un effet de pivot
- Liens vers des sites web externes
- Thèmes personnalisables
- Effets d'animation et de survol

## Structure du projet

- `index.html` : Le fichier principal contenant la structure HTML et les styles CSS.

## Comment modifier le projet pour vous-même

1. **Cloner le dépôt :**

   ```sh
   git clone https://github.com/Klaynight-dev/links_website_template.git
   cd links_website_template
   ```

2. **Modifier les informations de profil :**

   Ouvrez ``index.html`` et modifiez les valeurs de l'objet `profileData` dans le script JavaScript pour refléter vos informations personnelles.

   ```js
   const profileData = {
       profileLink: "https://votre-lien.com",
       profileImage: "https://votre-image.com/image.jpg",
       profileIcon: "https://votre-icone.com/icone.png",
       profileSiteText: "Votre site",
       userName: "Votre Nom",
       email: "votre.email@exemple.com",
       links: [
           { icon: "https://votre-icone.com/icone1.png", url: "https://votre-lien1.com", text: "Lien 1" },
           { icon: "https://votre-icone.com/icone2.png", url: "https://votre-lien2.com", text: "Lien 2" },
           { icon: "https://votre-icone.com/icone3.png", url: "https://votre-lien3.com", text: "Lien 3" }
       ],
       backgroundImage: "https://votre-image-de-fond.com/image.jpg",
       profileHoverColor: "#7289DA",
       neonColors: ["#7289DA", "#FF4500", "#00FF00", "#FFD700", "#FF69B4"]
   };
   ```

3. **Personnaliser les thèmes :**

   Vous pouvez ajouter ou modifier les thèmes dans le tableau `themes` pour correspondre à vos préférences de style.

   ```js
   const themes = [
       {
           background: "rgba(0, 0, 0, 0.6)",
           hoverColor: "#7289DA",
           textColor: "white",
           buttonBackground: "#2C2F33",
           buttonHoverBackground: "#7289DA",
           buttonTextColor: "white",
           linkHoverColor: "#7289DA"
       },
       // Ajoutez d'autres thèmes ici
   ];
   ```
   Sélectionner un thème :

```js
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
```

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
