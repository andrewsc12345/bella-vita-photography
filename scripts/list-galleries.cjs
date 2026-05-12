const fs = require('fs');
const dataFilePath = 'src/components/app/data.jsx';
const dataFile = fs.readFileSync(dataFilePath, 'utf8');
const match = dataFile.match(/export const DEFAULT_CLIENT_GALLERIES = (\[[\s\S]*?\]);/);
if (!match) { process.exit(1); }
const galleries = eval(match[1]);
galleries.forEach(g => {
  console.log(`${g.id}|${g.clientName}|${g.sessionType}|${g.date}|${g.images.length}`);
});
