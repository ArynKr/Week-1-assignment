const fs = require('fs');


fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  // remove all extra spaces from data
  data = data.replace(/\s+/g, ' ');
  fs.writeFile('./input.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});