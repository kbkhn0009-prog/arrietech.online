const fs = require('fs');
const path = require('path');

function loadJSON(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch (e) { console.error('Failed to load', p, e.message); process.exit(2); }
}

function flatten(obj, prefix = '') {
  const res = {};
  if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
    res[prefix.replace(/\.$/, '')] = String(obj);
    return res;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      Object.assign(res, flatten(item, `${prefix}[${i}].`));
    });
    return res;
  }
  if (obj && typeof obj === 'object') {
    for (const k of Object.keys(obj)) {
      Object.assign(res, flatten(obj[k], `${prefix}${k}.`));
    }
    return res;
  }
  return res;
}

const base = path.resolve(__dirname, '..');
const enPath = path.join(base, 'messages', 'en.json');
const ruPath = path.join(base, 'messages', 'ru.json');
const en = loadJSON(enPath);
const ru = loadJSON(ruPath);
const flatEn = flatten(en);
const flatRu = flatten(ru);

function compareKeys(a, b) {
  const aKeys = Object.keys(a).sort();
  const bKeys = Object.keys(b).sort();
  const missingInB = aKeys.filter(k => !(k in b));
  const extraInB = bKeys.filter(k => !(k in a));
  return { missingInB, extraInB };
}

const enVsRu = compareKeys(flatEn, flatRu);
const ruVsEn = compareKeys(flatRu, flatEn);

function findDuplicateValues(flat) {
  const map = {};
  for (const k of Object.keys(flat)) {
    const v = flat[k];
    if (!map[v]) map[v] = [];
    map[v].push(k);
  }
  const duplicates = Object.entries(map).filter(([, keys]) => keys.length > 1).map(([val, keys]) => ({ value: val, keys }));
  return duplicates;
}

const dupEn = findDuplicateValues(flatEn);
const dupRu = findDuplicateValues(flatRu);

console.log('== Translation keys comparison ==');
console.log('Keys in en missing in ru:', enVsRu.missingInB.length);
if (enVsRu.missingInB.length) console.log(enVsRu.missingInB.join('\n'));
console.log('Keys in ru missing in en:', ruVsEn.missingInB.length);
if (ruVsEn.missingInB.length) console.log(ruVsEn.missingInB.join('\n'));

console.log('\n== Duplicate values in en.json ==');
console.log('Duplicate value groups:', dupEn.length);
if (dupEn.length) console.dir(dupEn, { depth: null });

console.log('\n== Duplicate values in ru.json ==');
console.log('Duplicate value groups:', dupRu.length);
if (dupRu.length) console.dir(dupRu, { depth: null });

process.exit(0);
