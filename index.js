import config from './config.json'

if (!require.context || typeof require.context === "undefined") {
  try {
    const fs = require("fs");
    const path = require("path");
    require.context = (
      base = "./",
      scanSubDirectories = true,
      regularExpression = /\.md$/
    ) => {
      const files = {};
      function readDirectory(directory) {
        fs.readdirSync(directory).forEach((file) => {
          const fullPath = path.resolve(directory, file);
          if (fs.statSync(fullPath).isDirectory()) {
            if (scanSubDirectories) readDirectory(fullPath);
            return;
          }
          if (!regularExpression.test(fullPath)) return;
          files[fullPath] = true;
        });
      }
      readDirectory(path.resolve(__dirname, base));
      function Module(file) {
        return require(file);
      }
      Module.keys = () => Object.keys(files);
      return Module;
    };
  } catch (error) {
    require.context = () => {
      return {};
    };
  }
}

const context = require.context("./", true, /\.md$/);
const all = {};
if (context.keys) {
  context.keys().forEach((key) => {
    if (key.includes("@riptano")) {
      return;
    }
    const fileName = key.replace('./', '');
    const resource = require(`./${fileName}`);
    all[fileName] = resource;
  });
}


export {
    config,
    all
}