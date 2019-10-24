// const validExtention = require('./validpath');
const fs = require('fs');

const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./README.md', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
        //  console.log(data);
      }
    });
  });
}

module.exports = readFile;