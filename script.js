const fs = require('fs');

// Source file path
const sourceFilePath = 'a.bmp';

// Destination file path
const destinationFilePath = 'FingerImage.bmp';

// Read the source image file
fs.readFile(sourceFilePath, (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Write the image data to the destination file
  fs.writeFile(destinationFilePath, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Image saved as', destinationFilePath);
    }
  });
});
