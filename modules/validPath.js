const path = require('path');

const validExtention = (url) => {
  // const parsePath = path.parse;
  // console.log(parsePath);
  if (path.extname(url) === '.md') {
    return true
  } else {
    return false
  }
};

module.exports = validExtention;