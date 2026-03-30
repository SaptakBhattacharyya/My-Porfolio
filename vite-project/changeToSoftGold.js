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

    // Use tokens for safety
    content = content.replace(/184,\s*134,\s*11/g, '__RGB_MAIN__');
    content = content.replace(/#b8860b/gi, '__HEX_MAIN__');
    content = content.replace(/#daa520/gi, '__HEX_ACCENT__');
    content = content.replace(/#8b6508/gi, '__HEX_MED_DARK__');
    content = content.replace(/#6e5005/gi, '__HEX_DARK__');
    content = content.replace(/#d4a853/gi, '__HEX_LIGHT__');
    content = content.replace(/#e8d5a3/gi, '__HEX_LIGHTEST__');

    // Muted Champagne / Elegant Matte Gold mapping
    content = content.replace(/__RGB_MAIN__/g, '192, 160, 98'); // RGB for #C0A062
    content = content.replace(/__HEX_MAIN__/g, '#c0a062'); 
    content = content.replace(/__HEX_ACCENT__/g, '#d1b986'); 
    content = content.replace(/__HEX_MED_DARK__/g, '#9c804b');
    content = content.replace(/__HEX_DARK__/g, '#7a6335');
    content = content.replace(/__HEX_LIGHT__/g, '#dfca9f');
    content = content.replace(/__HEX_LIGHTEST__/g, '#efe1c3');

    if (content !== originalStr) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});
