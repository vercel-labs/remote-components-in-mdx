import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content/docs');

export function getPostBySlug(slug: string[]) {
  const realSlug = slug.join('/');
  // Check for .mdx file
  let fullPath = path.join(contentDir, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    // Check for index.mdx in a folder (or root index)
    fullPath = path.join(contentDir, realSlug, 'index.mdx');
  }

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return fileContents;
}

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.mdx')) {
          arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

export function getAllPostSlugs() {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const files = getAllFiles(contentDir);
  
  return files.map((file) => {
    const relativePath = path.relative(contentDir, file);
    // Remove extension
    const withoutExt = relativePath.replace(/\.mdx$/, '');
    const parts = withoutExt.split(path.sep);
    
    // If the last part is 'index', remove it to support clean URLs
    // e.g. /docs/index.mdx -> /docs
    // e.g. /docs/foo/index.mdx -> /docs/foo
    if (parts[parts.length - 1] === 'index') {
      parts.pop();
    }
    
    return parts;
  });
}
