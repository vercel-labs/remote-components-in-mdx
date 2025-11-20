const fs = require('fs');
const path = require('path');

function removeDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file) => {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        removeDirectory(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dir);
  }
}

function syncDirectory(src, dest) {
  if (!fs.existsSync(src)) {
    return;
  }

  if (fs.existsSync(dest)) {
    removeDirectory(dest);
  }

  fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      syncDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const contentDir = path.join(process.cwd(), 'content');
const docsDir = path.join(process.cwd(), 'docs');

syncDirectory(contentDir, docsDir);
console.log('Synced content to docs folder');

