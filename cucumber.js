const path = require("path");

module.exports = {
  default: {
    format: [
      'progress-bar',
      //path.resolve(__dirname, "reporter.js"),
      'summary',
    ],
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: ["src/test/features/*.feature"],
    //publishQuiet: true,
    dryRun: false,
    require: [
      "src/test/steps/*.ts",
      "src/test/utiles/*.ts"
    ],
    requireModule: ["ts-node/register"],
    parallel: 2,
  },
};
