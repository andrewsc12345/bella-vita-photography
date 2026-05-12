const fs = require('fs');
const slug = process.argv[2];
if (!slug) { console.error('Usage: delete-gallery.cjs <slug>'); process.exit(1); }

const dataFilePath = 'src/components/app/data.jsx';
let dataFile = fs.readFileSync(dataFilePath, 'utf8');
const match = dataFile.match(/export const DEFAULT_CLIENT_GALLERIES = (\[[\s\S]*?\]);/);
if (!match) { console.error('Could not find galleries'); process.exit(1); }

let galleries = eval(match[1]);
const before = galleries.length;
galleries = galleries.filter(g => g.id !== slug);
if (galleries.length === before) {
  console.error(`Gallery "${slug}" not found`);
  process.exit(1);
}

const newDataString = `export const DEFAULT_CLIENT_GALLERIES = ${JSON.stringify(galleries, null, 2)};`;
const newContent = dataFile.replace(/export const DEFAULT_CLIENT_GALLERIES = \[[\s\S]*?\];/, newDataString);
fs.writeFileSync(dataFilePath, newContent);

const folderPath = `public/clients/${slug}`;
if (fs.existsSync(folderPath)) {
  fs.rmSync(folderPath, { recursive: true, force: true });
}

console.log(`Gallery "${slug}" deleted. Remaining: ${galleries.length}`);
