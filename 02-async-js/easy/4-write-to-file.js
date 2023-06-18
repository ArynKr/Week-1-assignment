const fs = require('fs');

fs.writeFile('./4-write-to-file.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

let sum = 0;
for (let i = 0; i < 10000000000; i++) {
  sum += i;
}
console.log(sum);