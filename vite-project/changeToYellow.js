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
    
    // Replace RGB string emerald-500 (16, 185, 129) -> yellow-500 (234, 179, 8)
    if (content.match(/16,\s*185,\s*129/)) {
        content = content.replace(/16,\s*185,\s*129/g, '234, 179, 8');
        changed = true;
    }
    // Replace hex emerald-500 #10b981 -> #eab308
    if (content.match(/#10b981/i)) {
        content = content.replace(/#10b981/gi, '#eab308');
        changed = true;
    }
    // Replace hex emerald-200 #a7f3d0 -> yellow-200 #fef08a
    if (content.match(/#a7f3d0/i)) {
        content = content.replace(/#a7f3d0/gi, '#fef08a');
        changed = true;
    }
    // Replace hex emerald-50 #ecfdf5 -> yellow-50 #fefce8
    if (content.match(/#ecfdf5/i)) {
        content = content.replace(/#ecfdf5/gi, '#fefce8');
        changed = true;
    }
    // Replace hex emerald-700 #047857 -> yellow-700 #a16207
    if (content.match(/#047857/i)) {
        content = content.replace(/#047857/gi, '#a16207');
        changed = true;
    }
    // Replace hex emerald-600 #059669 -> yellow-600 #ca8a04
    if (content.match(/#059669/i)) {
        content = content.replace(/#059669/gi, '#ca8a04');
        changed = true;
    }
    // Replace hex emerald-400 #34d399 -> yellow-400 #facc15
    if (content.match(/#34d399/i)) {
        content = content.replace(/#34d399/gi, '#facc15');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});
