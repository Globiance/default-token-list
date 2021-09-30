const fs = require("fs");
const path = require("path");

const srcPath = path.join(__dirname, "../src");
const libPath = path.join(__dirname, "../lib");

const { DEFAULT_TOKEN_LIST, COMMON_BASES, DEFAULT_POOL_LIST } = require(path.join(
  srcPath,
  "index"
));

const content = `const DEFAULT_TOKEN_LIST = ${JSON.stringify(
  DEFAULT_TOKEN_LIST
)};const COMMON_BASES=${JSON.stringify(COMMON_BASES)}\n;const DEFAULT_POOL_LIST=${JSON.stringify(DEFAULT_POOL_LIST)}\nmodule.exports = {
  DEFAULT_TOKEN_LIST,
  COMMON_BASES,
  DEFAULT_POOL_LIST
};
`;

fs.writeFileSync(path.join(libPath, "index.js"), content);
fs.copyFileSync(
  path.join(srcPath, "index.d.ts"),
  path.join(libPath, "index.d.ts")
);
