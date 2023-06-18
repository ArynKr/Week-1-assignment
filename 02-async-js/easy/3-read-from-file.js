const fs = require('fs');

fs.readFile('./3-read-from-file.md', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

let sum = 0;
for (let i = 0; i < 10000000000; i++) {
  sum += i;
}
console.log(sum);