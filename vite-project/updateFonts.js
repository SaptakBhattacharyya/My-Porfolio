import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const Array = fs.readdirSync(dir);
    Array.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath));
        } else {
            if (filePath.endsWith('.css') || filePath.endsWith('.jsx')) {
                results.push(filePath);
            }
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalStr = content;

    content = content.replace(/font-family:\s*['"]?Outfit['"]?,\s*sans-serif;/g, 'font-family: var(--font-heading);');
    content = content.replace(/font-family:\s*['"]?Playfair Display['"]?,\s*serif;/g, 'font-family: var(--font-heading);');
    content = content.replace(/font-family:\s*['"]?Plus Jakarta Sans['"]?,\s*sans-serif;/g, 'font-family: var(--font-body);');
    content = content.replace(/font-family:\s*['"]?Inter['"]?,\s*system-ui,\s*-apple-system,\s*sans-serif;/gi, 'font-family: var(--font-heading);');

    if (content !== originalStr) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated fonts in ' + file);
    }
});
