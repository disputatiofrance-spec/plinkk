# Script de test pour vérifier le déploiement (Windows PowerShell)
Write-Host "🧪 Test de déploiement local..." -ForegroundColor Cyan

# Vérifier Node.js
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js installé: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js n'est pas installé" -ForegroundColor Red
    exit 1
}

# Vérifier npm
try {
    $npmVersion = npm --version
    Write-Host "✅ npm installé: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm n'est pas installé" -ForegroundColor Red
    exit 1
}

# Installer les dépendances
Write-Host "📦 Installation des dépendances..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Échec de l'installation des dépendances" -ForegroundColor Red
    exit 1
}

# Compiler TypeScript
Write-Host "🔨 Compilation TypeScript..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Échec de la compilation TypeScript" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Compilation réussie" -ForegroundColor Green

# Copier les fichiers
Write-Host "📁 Copie des fichiers..." -ForegroundColor Yellow
npm run copy:files
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Échec de la copie des fichiers" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Copie réussie" -ForegroundColor Green

# Vérifier les fichiers critiques
Write-Host "🔍 Vérification des fichiers critiques..." -ForegroundColor Yellow

$filesToCheck = @(
    "index.html",
    "contents/js/init.js",
    "contents/js/tools.js",
    "contents/css/styles.css"
)

foreach ($file in $filesToCheck) {
    if (Test-Path $file) {
        Write-Host "✅ $file" -ForegroundColor Green
    } else {
        Write-Host "❌ $file manquant" -ForegroundColor Red
        exit 1
    }
}

Write-Host "🎉 Tous les tests sont passés !" -ForegroundColor Green
Write-Host "🌐 Vous pouvez maintenant lancer 'npm run serve' pour tester localement" -ForegroundColor Cyan
