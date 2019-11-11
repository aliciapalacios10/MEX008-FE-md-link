// const fetchUrl = require("fetch").fetchUrl;
// // const links = element.href;


// const validateLinks = (url) => {
//   console.log("LLega a validateLinks");
//   console.log("url", url);
//   return new Promise((resolve, reject) => {
//     fetchUrl(url ,(error, meta, body) => {
//       if (meta){
//         resolve(meta.status);
//       } else {
//         reject(error);
//       }
//     });
//   });
// }

// module.exports = validateLinks;




// const fetch = require('node-fetch');
// const path = require('path');
// // const http = require('http');

// const validateLinks = (arr) => {
//   arr.forEach(element => {
//     let link = element.href;
//     fetch(link)
//       .then((link) => {
//         link.url;
//         link.statusText;
//         link.status;
//       });
//   });
// };


// module.exports = validateLinks;




// const fetch = require('node-fetch');
// const path = require('path');

// const validateLinks = (data, newArray) => {
//   return new Promise((resolve) => {
//     const linkArray = [];
//     newArray.forEach(element => {
//       const link = element.href;
//       fetch(link)
//         .then((link) => {
//           link.url;
//           link.statusText;
//           link.status;
//           linkArray.push(link)
//         });

//     });
//     resolve(linkArray);
//     console.log(linkArray);
    
//   })
// }


// module.exports = validateLinks;