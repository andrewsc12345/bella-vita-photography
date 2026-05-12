const fs = require('fs');

const [,, slug, clientName, password, sessionType] = process.argv;
if (!slug || !clientName || !password) {
  console.error('Usage: node scripts/add-gallery.cjs <slug> "<clientName>" <password> "<sessionType>"');
  process.exit(1);
}

const photoDir = `public/clients/${slug}`;
if (!fs.existsSync(photoDir)) {
  console.error(`Photo folder not found: ${photoDir}`);
  process.exit(1);
}

const photos = fs.readdirSync(photoDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f)).sort();
if (photos.length === 0) { console.error(`No photos found in ${photoDir}`); process.exit(1); }

const newGallery = {
  id: slug,
  clientName: clientName,
  password: password,
  sessionType: sessionType || 'Photo Session',
  date: new Date().toISOString().split('T')[0],
  coverImage: `/clients/${slug}/${photos[0]}`,
  images: photos.map((p, i) => ({
    src: `/clients/${slug}/${p}`,
    full: `/clients/${slug}/${p}`,
    title: `${clientName} ${String(i + 1).padStart(2, '0')}`
  }))
};

const dataFilePath = 'src/components/app/data.jsx';
let dataFile = fs.readFileSync(dataFilePath, 'utf8');
const match = dataFile.match(/export const DEFAULT_CLIENT_GALLERIES = (\[[\s\S]*?\]);/);
if (!match) { console.error('Could not find DEFAULT_CLIENT_GALLERIES in data.jsx'); process.exit(1); }

let existingGalleries;
try { existingGalleries = eval(match[1]); }
catch (e) { console.error('Could not parse existing galleries:', e.message); process.exit(1); }

const filtered = existingGalleries.filter(g => g.id !== slug);
const updated = [...filtered, newGallery];
const newDataString = `export const DEFAULT_CLIENT_GALLERIES = ${JSON.stringify(updated, null, 2)};`;
const newContent = dataFile.replace(/export const DEFAULT_CLIENT_GALLERIES = \[[\s\S]*?\];/, newDataString);
fs.writeFileSync(dataFilePath, newContent);

console.log(`✓ Gallery "${clientName}" added with ${photos.length} photos`);
console.log(`  Password: ${password}`);
