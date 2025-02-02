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
   - Ouvrez `index.html` et modifiez les valeurs de l'objet `profileData` :
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
     neonColors: ["#7289DA", "#FF4500", "#00FF00", "#FFD700", "#FF69B4"] // Couleurs néon pour les effets
   };
   ```

3. **Personnaliser les thèmes :**
   - Vous pouvez ajouter ou modifier les thèmes dans le tableau `themes` :
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

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
