// read-directory.js
const fs = require('fs');

fs.readdir('./', (err, files) => {
  if (err) {
    console.error('Unable to read the directory:', err);
    return;
  }

  console.log(`Your Files:`);
  files.forEach(file => {
    console.log(file);
  });
});
