const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const root = (...args) => {
  return path.join.apply(path, [ROOT].concat(args));
};


module.exports = {
  root: root,
};