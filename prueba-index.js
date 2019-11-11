// const validFilePath = require('./modules/validPath.js');
// const readFile = require('./modules/readFile.js');
// const getlinks = require('./modules/getLinks');
// const getValidateLinks = require('./modules/validate.js')

// const mdLinks = (url, option1) => {
//   if (validFilePath(url)) {
//     readFile(url)
//       .then((data) => {
//         return getlinks(data)
//       })
//       .then(result => {
//         console.log("Información",result)
//         if (process.argv[3] == null && process.argv[4] == null) {
//           console.log(result);
//           // } else if (option1 === "--validate") {
//           //   console.log(getValidateLinks(result));

//         } else if (option1 === "--validate") {
//           // const links = element.href;
//           // // console.log(links);

//           Promise.all(result.map( objLink => getValidateLinks(objLink.href)
          
//               .catch(err => err)))
//             .then(results => console.log(results));
//         }
//       });
//     // .catch(error => console.error(error));
//   }
// }

// module.exports = mdLinks;
// mdLinks(process.argv[2], process.argv[3]);






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




// const mdLinks = (url, option1) => {
//   if (validFilePath(url)) {
//     readFile(url)
//       .then((data) => {
//         return getlinks(data);
//       }).then(result => {
//         const arrLink = result;
//         //  console.log(arrLink);

//         if (process.argv[3] == null && process.argv[4] == null) {
//           return arrLink
//         } else if (option1 === "--validate") {
//           // console.log(getValidateLinks(res));
//           const resultVal = getValidateLinks(arrLink);
//           return resultVal
//           //.then(resolve => console.log(resolve));
//         }
//         // const arrLink = getlinks(data);
//         // console.log(arrLink);

//         // if (process.argv[3] == null && process.argv[4] == null) {
//         //   return arrLink
//         // } else if (option1 === "--validate") {
//         //   // console.log(getValidateLinks(res));
//         //   const resultVal = getValidateLinks(arrLink);
//         //   return resultVal
//         //   //.then(resolve => console.log(resolve));

//         // }
//       }).catch(error => console.error(error));
//   }
// }

// module.exports = mdLinks;
// mdLinks(process.argv[2], process.argv[3]);
