#!/bin/bash

# Script de test pour vérifier le déploiement
echo "🧪 Test de déploiement local..."

# Vérifier Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé"
    exit 1
fi

# Vérifier npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé"
    exit 1
fi

echo "✅ Node.js et npm sont installés"

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

# Compiler TypeScript
echo "🔨 Compilation TypeScript..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Échec de la compilation TypeScript"
    exit 1
fi

echo "✅ Compilation réussie"

# Copier les fichiers
echo "📁 Copie des fichiers..."
npm run copy:files

if [ $? -ne 0 ]; then
    echo "❌ Échec de la copie des fichiers"
    exit 1
fi

echo "✅ Copie réussie"

# Vérifier les fichiers critiques
echo "🔍 Vérification des fichiers critiques..."

FILES_TO_CHECK=(
    "index.html"
    "contents/js/init.js"
    "contents/js/tools.js"
    "contents/css/styles.css"
)

for file in "${FILES_TO_CHECK[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file manquant"
        exit 1
    fi
done

echo "🎉 Tous les tests sont passés !"
echo "🌐 Vous pouvez maintenant lancer 'npm run serve' pour tester localement"
