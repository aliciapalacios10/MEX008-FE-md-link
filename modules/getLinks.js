const jsdom = require("jsdom");
const {
  JSDOM
} = jsdom;
const marked = require('marked');


const searchLinks = (data) => {
    return new Promise((resolve) => {
      const convertFileHtml = marked(data); 
      const dom = new JSDOM(convertFileHtml);
      const getLabels = dom.window.document.querySelectorAll("a");
      const newArray = [];
      getLabels.forEach(element => {
        const newObject = {
          href: element.href,
          text: element.textContent,
          file: process.argv[2]
        };
        newArray.push(newObject);
      });
      resolve(newArray);
      console.log(newArray);
      
    });
  }

    module.exports = searchLinks;
    // console.log(searchLinks);