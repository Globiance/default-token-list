const fs = require("fs");
const path = require("path");

const srcPath = path.join(__dirname, "../src");
const libPath = path.join(__dirname, "../lib");

const { DEFAULT_TOKEN_LIST, COMMON_BASES } = require(path.join(
  srcPath,
  "index"
));

const content = `const DEFAULT_TOKEN_LIST = ${JSON.stringify(
  DEFAULT_TOKEN_LIST
)};const COMMON_BASES=${JSON.stringify(COMMON_BASES)}\nmodule.exports = {
  DEFAULT_TOKEN_LIST,
  COMMON_BASES,
};
`;

fs.writeFileSync(path.join(libPath, "index.js"), content);
fs.copyFileSync(
  path.join(srcPath, "index.d.ts"),
  path.join(libPath, "index.d.ts")
);
