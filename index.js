const fs = require('fs');
const colors = require('colors');

console.log('Scanning the directory...'.green);
fs.readdir('.', 'utf-8', function(err, data) {
  if (err) throw err;
  console.log('This directory includes:'.grey);
  data.forEach(x => {
    console.log(x.magenta);
  });
  console.log('Saving this data inside data.txt file...'.yellow);
  fs.writeFile('data.txt', data, function(err, data) {
    if (err) throw err;
    console.log('File saved'.green);
  });
});
