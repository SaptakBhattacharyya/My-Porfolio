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
    
    // Replace rgb yellow-500 (234, 179, 8) -> gold (212, 168, 83)
    if (content.match(/234,\s*179,\s*8/)) {
        content = content.replace(/234,\s*179,\s*8/g, '212, 168, 83');
        changed = true;
    }
    // Replace hex yellow-500 #eab308 -> gold #d4a853
    if (content.match(/#eab308/i)) {
        content = content.replace(/#eab308/gi, '#d4a853');
        changed = true;
    }
    // Replace hex yellow-200 #fef08a -> light gold #e8d5a3
    if (content.match(/#fef08a/i)) {
        content = content.replace(/#fef08a/gi, '#e8d5a3');
        changed = true;
    }
    // Replace hex yellow-50 #fefce8 -> lightest gold #fdf6e3
    if (content.match(/#fefce8/i)) {
        content = content.replace(/#fefce8/gi, '#fdf6e3');
        changed = true;
    }
    // Replace hex yellow-700 #a16207 -> dark gold #996515
    if (content.match(/#a16207/i)) {
        content = content.replace(/#a16207/gi, '#996515');
        changed = true;
    }
    // Replace hex yellow-600 #ca8a04 -> med dark gold #b8860b
    if (content.match(/#ca8a04/i)) {
        content = content.replace(/#ca8a04/gi, '#b8860b');
        changed = true;
    }
    // Replace hex yellow-400 #facc15 -> bright gold #f5c542
    if (content.match(/#facc15/i)) {
        content = content.replace(/#facc15/gi, '#f5c542');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});
