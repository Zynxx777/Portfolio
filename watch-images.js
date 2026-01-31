const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'pictures');
const outputFile = path.join(__dirname, 'images.json');

function generateImages() {
  fs.readdir(imgDir, (err, files) => {
    if (err) {
      console.error('Error reading pictures directory:', err);
      return;
    }

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const images = files
      .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
      .map(file => `pictures/${file}`);

    fs.writeFile(outputFile, JSON.stringify(images, null, 2), (err) => {
      if (err) {
        console.error('Error writing images.json:', err);
        return;
      }
      console.log('images.json updated');
    });
  });
}

// Initial generation
generateImages();

// Watch for changes
fs.watch(imgDir, (eventType, filename) => {
  if (filename) {
    console.log(`File ${filename} changed: ${eventType}`);
    generateImages();
  }
});

console.log('Watching photos folder for changes...');