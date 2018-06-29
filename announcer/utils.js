
const fs = require('fs');

const readFile = (path) => {
  return JSON.parse(fs.readFileSync('recognized.json', 'utf8'));
}

const writeFile = (path, newData) => {
  fs.write(path, JSON.stringify(newData), (err) => {
    if (err) return console.log(err); 
  })
}


module.exports = {
  readFile: readFile,
  writeFile: writeFile
}