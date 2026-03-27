import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
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
    let changed = false;
    
    // Replace RGB string (212, 168, 83) -> (16, 185, 129)
    if (content.includes('212, 168, 83') || content.includes('212,168,83')) {
        content = content.replace(/212,\s*168,\s*83/g, '16, 185, 129');
        changed = true;
    }
    // Replace hex #d4a853 -> #10b981
    if (content.includes('d4a853') || content.includes('D4A853')) {
        content = content.replace(/#d4a853/gi, '#10b981');
        changed = true;
    }
    // Replace #e8d5a3 (light mode gold border) -> #a7f3d0
    if (content.includes('e8d5a3') || content.includes('E8D5A3')) {
        content = content.replace(/#e8d5a3/gi, '#a7f3d0');
        changed = true;
    }
    // Replace #fdf6e3 (light mode gold bg) -> #ecfdf5
    if (content.includes('fdf6e3') || content.includes('FDF6E3')) {
        content = content.replace(/#fdf6e3/gi, '#ecfdf5');
        changed = true;
    }
    // Replace #996515 (light mode text color) -> #047857
    if (content.includes('996515') || content.includes('996515')) {
        content = content.replace(/#996515/gi, '#047857');
        changed = true;
    }
    // Replace #b8860b -> #059669
    if (content.includes('b8860b') || content.includes('B8860B')) {
        content = content.replace(/#b8860b/gi, '#059669');
        changed = true;
    }
    // Replace #f5c542 -> #34d399
    if (content.includes('f5c542') || content.includes('F5C542')) {
        content = content.replace(/#f5c542/gi, '#34d399');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});
