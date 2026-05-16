const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else {
      results.push(full);
    }
  });
  return results;
}

const base = path.resolve(__dirname, '..');
const compDir = path.join(base, 'components');
if (!fs.existsSync(compDir)) { console.error('No components dir'); process.exit(1); }
const files = walk(compDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.js') || f.endsWith('.jsx'));
const map = {};
for (const f of files) {
  const content = fs.readFileSync(f);
  const hash = crypto.createHash('sha256').update(content).digest('hex');
  if (!map[hash]) map[hash] = [];
  map[hash].push(f.replace(base + path.sep, ''));
}
const dupGroups = Object.values(map).filter(g => g.length > 1);
console.log('Checked', files.length, 'files');
console.log('Duplicate groups found:', dupGroups.length);
if (dupGroups.length) console.dir(dupGroups, { depth: null });
process.exit(0);
