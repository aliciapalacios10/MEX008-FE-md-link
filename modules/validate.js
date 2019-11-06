const fetchUrl = require("fetch").fetchUrl;

const validateLinks = (element) => {
  return new Promise((resolve, reject) => {
      let link = encodeURI(element.href);
      fetchUrl(link, (error, meta, body) => {
        if (meta) {
          resolve(meta.status);
        } else {
          reject(error);
        }
      })
  })
}


module.exports = validateLinks;




// const fetchUrl = require('fetch').fetchUrl;

// const validateLinks = (arr) => {
//   arr.forEach(element => {
//     let link = encodeURI(element.href);
//     console.log("LINK:", link);
//     fetchUrl(link, (error, meta, body) => {
//       if (meta) {
//         return meta.status;
//         /*let textStatus;
//         if(meta.status === 200) {
//           textStatus = 'OK'
//         } else {
//           textStatus = 'FAIL'
//         }

//         const returnObject = {
//           status: meta.status,
//           textStatus: textStatus,
//           file: element.path,
//           text: element.text,
//         } */

//         console.log("META:", meta);
//       } else if (error) {
//         console.log("ERROR:", error)
//       }

//     });
//   });
// };


// module.exports = validateLinks;



// const fetch = require('node-fetch');

// const validateLinks = (arr) => {
//   arr.forEach(element => {
//     let link = element.href;
//     fetch(link)
//       .then((link) => {
//         link.url;
//         link.statusText;
//   //       console.log (`{ href: ${link.url}
//   // status: ${link.status} ${link.statusText}`);
//       });
//   });
// };


// module.exports = validateLinks;



// const fetch = require('node-fetch');


// const validateLinks = (arr) => {
//     return new Promise((resolve, reject) => {
//         arr.forEach( element => {
//             let links = element.href;
//             fetch(links)
//             .then((links) => {
//                 newArray.push(links.status)
//             });
//         });
//     });
// }
