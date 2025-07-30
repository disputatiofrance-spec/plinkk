const fs = require('fs');
const path = require('path');

// Script pour copier les fichiers après compilation TypeScript
function copyFiles() {
    console.log('🔄 Copie des fichiers après compilation...');
    
    // Vérifier si le dossier dist existe
    if (!fs.existsSync('dist')) {
        console.error('❌ Le dossier dist n\'existe pas. Exécutez d\'abord "npm run build"');
        process.exit(1);
    }
    
    try {
        // Créer le dossier contents/js s'il n'existe pas
        const jsDir = path.join('contents', 'js');
        if (!fs.existsSync(jsDir)) {
            fs.mkdirSync(jsDir, { recursive: true });
        }
        
        // Copier les fichiers JS compilés vers contents/js
        const distFiles = fs.readdirSync('dist');
        distFiles.forEach(file => {
            if (file.endsWith('.js') || file.endsWith('.js.map')) {
                const source = path.join('dist', file);
                const destination = path.join('contents', 'js', file);
                fs.copyFileSync(source, destination);
                console.log(`✅ Copié: ${file} → contents/js/`);
            }
        });
        
        console.log('🎉 Copie terminée avec succès !');
        console.log('💡 Vous pouvez maintenant utiliser "npm run serve" pour tester localement');
    } catch (error) {
        console.error('❌ Erreur lors de la copie:', error.message);
        process.exit(1);
    }
}

copyFiles();
