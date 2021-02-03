const fs = require("fs");
const path = require(`path`);
const alias = require(`./aliases`);

const JSCONFIG_PATH = "../jsconfig.json";
const aliases = alias("");

const jsconfigObject = {
  compilerOptions: {
    baseUrl: "./src",
    jsx: "react",
    paths: {},
  },
  exclude: ["node_modules"],
};

Object.keys(aliases).forEach((k) => {
  jsconfigObject.compilerOptions.paths[k] = [`${aliases[k]}/index`];
});

const jsconfigJson = JSON.stringify(jsconfigObject, null, 2);
fs.writeFile(
  path.resolve(__dirname, JSCONFIG_PATH),
  jsconfigJson,
  "utf8",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("CHANGED jsconfig.json");
    }
  }
);
