const Helpers = require('./helpers');


module.exports = {
    NODE_MODULES: 'node_modules',
    SRC_DIR: Helpers.root("./src"),
    DIST_DIR: Helpers.root("./dist"),
    CONTENT_SCRIPT_PATH: "content/summa.content.js",
    BACKGROUND_SCRIPT_PATH: "extension/main.bg.js",
    POPUP_SCRIPT_PATH: "extension/**/*.jsx",
};