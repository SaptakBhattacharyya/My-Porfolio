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
    let originalStr = content;
    
    // Use tokens to avoid overlap
    content = content.replace(/212,\s*168,\s*83/g, '__RGB_MAIN__');
    content = content.replace(/#d4a853/gi, '__HEX_MAIN__');
    content = content.replace(/#e8d5a3/gi, '__HEX_LIGHT__');
    content = content.replace(/#fdf6e3/gi, '__HEX_LIGHTEST__');
    content = content.replace(/#996515/gi, '__HEX_DARK__');
    content = content.replace(/#b8860b/gi, '__HEX_MED_DARK__');
    content = content.replace(/#f5c542/gi, '__HEX_BRIGHT__');

    // Replace tokens with deep gold
    content = content.replace(/__RGB_MAIN__/g, '184, 134, 11'); // for #b8860b
    content = content.replace(/__HEX_MAIN__/g, '#b8860b'); 
    content = content.replace(/__HEX_LIGHT__/g, '#d4a853'); // former main is now light
    content = content.replace(/__HEX_LIGHTEST__/g, '#e8d5a3'); // former light is now lightest
    content = content.replace(/__HEX_DARK__/g, '#6e5005');  // darker gold
    content = content.replace(/__HEX_MED_DARK__/g, '#8b6508'); // med dark gold
    content = content.replace(/__HEX_BRIGHT__/g, '#daa520'); // goldenrod

    if (content !== originalStr) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});
