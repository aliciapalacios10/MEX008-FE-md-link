const validFilePath = require('./modules/validPath.js');
const readFile = require('./modules/readFile.js');
const getlinks = require('./modules/getLinks');

const mdLinks = (url, options) => {
  if (validFilePath(url)) {
    readFile(url).then((data) => {
        // console.log(typeOf (url));
        return getlinks(data)
        // .catch(error => console.error(error));
      }).then(data => console.log(data))
      .catch(error => console.error(error));
  }
}

module.exports = mdLinks;
mdLinks(process.argv[2]);
