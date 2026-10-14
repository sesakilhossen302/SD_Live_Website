const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const nextDir = path.join(outDir, '_next');
const assetsDir = path.join(outDir, 'nextassets'); // avoid conflict with public/assets

function copyRecursiveSync(src, dest) {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

if (fs.existsSync(nextDir)) {
  copyRecursiveSync(nextDir, assetsDir);
  console.log('Copied _next to nextassets');
} else if (!fs.existsSync(assetsDir)) {
    console.log('No _next directory found.');
}

function replaceInFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      replaceInFiles(filePath);
    } else {
      if (filePath.endsWith('.html') || filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.json')) {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Replace absolute paths
        content = content.replace(/\/_next\//g, '/nextassets/');
        
        // Replace encoded paths (sometimes found in JSON or inline scripts)
        content = content.replace(/\/_next%2F/g, '/nextassets%2F');
        content = content.replace(/\\\/_next\\\//g, '\\/nextassets\\/');
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
        }
      }
    }
  }
}

replaceInFiles(outDir);
console.log('Fixed all Next.js paths for cPanel deployment!');
