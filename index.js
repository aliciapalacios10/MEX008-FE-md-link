const validFilePath = require('./modules/validPath.js');
const readFile = require('./modules/readFile.js');
const getlinks = require('./modules/getLinks');
const getValidateLinks = require('./modules/validate.js');


const mdLinks = (url, option1, option2) => {
  return new Promise((resolve => {
    if (validFilePath(url)) {
      readFile(url)
        .then((data) => {
          return getlinks(data)
        }).then(result => {
          if (process.argv[3] == null && process.argv[4] == null) {
            console.log(result);
          } else if (option1 === '--validate' && option2 === '--stats') {
            // console.log('Total: , Unique:, Broken:');
            const newArray = new Set(result.map((item) => {
              return item.href
            }));
            console.log("Total:", result.length);
            console.log("Unicos:", newArray.size);

          } else if (option1 === '--validate') {
            result.forEach(element => {
              getValidateLinks(element)
                .then(res => {
                  console.log("Link:", element.href);
                  console.log("Status:", res)
                })
                .catch(err => {
                  console.log(err);
                });
            });

          } else if (option1 === '--stats') {
            const newArray = new Set(result.map((item) => {
              return item.href
            }));
            console.log("Total:", result.length);
            console.log("Unicos:", newArray.size);
          }
        })
        .catch(error => console.error(error));

    }
  }))
}

module.exports = mdLinks;
mdLinks(process.argv[2], process.argv[3], process.argv[4]);


// const validFilePath = require('./modules/validPath.js');
// const readFile = require('./modules/readFile.js');
// const getlinks = require('./modules/getLinks');
// const getValidateLinks = require('./modules/validate.js');

// const mdLinks = (url, options) => {
//   if (validFilePath(url)) {
//     readFile(url).then((data) => {
//         return getlinks(data)
//       }).then(data => console.log(data))
//       .catch(error => console.error(error));
//   }
// }

// module.exports = mdLinks;
// mdLinks(process.argv[2]);
