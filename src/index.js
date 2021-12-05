const fs = require("fs");
const path = require("path");

const TOKENS_PATH = path.join(__dirname, "tokens");
const BASES_PATH = path.join(__dirname, "bases");
const POOLS_PATH = path.join(__dirname, "pools");

function getAssetLogo(name) {
  return (
    "data:image/png;base64, " +
    fs
      .readFileSync(path.join(__dirname, "./assets", `${name}.png`))
      .toString("base64")
  );
}

function getTokenFromSymbol(symbol) {
  const token = JSON.parse(
    fs.readFileSync(path.join(TOKENS_PATH, `${symbol}.json`)).toString()
  );
  const logo = getAssetLogo(token.symbol.toLowerCase());
  return {
    ...token,
    logo,
  };
}

function getAllTokens() {
  return fs.readdirSync(TOKENS_PATH).map((x) => {
    const token = JSON.parse(
      fs.readFileSync(path.join(TOKENS_PATH, x)).toString()
    );
    const logo = getAssetLogo(token.symbol.toLowerCase());
    return {
      ...token,
      logo,
    };
  });
}

function getAllBases() {
  return fs.readdirSync(BASES_PATH).map((x) => {
    const token = JSON.parse(
      fs.readFileSync(path.join(TOKENS_PATH, x)).toString()
    );
    const logo = getAssetLogo(token.symbol.toLowerCase());
    return {
      ...token,
      logo,
    };
  });
}

function getAllPools() {
  return fs.readdirSync(POOLS_PATH).map((x) => {
    const pool = JSON.parse(
      fs.readFileSync(path.join(POOLS_PATH, x)).toString()
    );
    return {
      first: getTokenFromSymbol(pool.first),
      second: getTokenFromSymbol(pool.second),
      address: pool.address,
    };
  });
}

const x = getAllTokens();

const DEFAULT_TOKEN_LIST = [...getAllTokens()];

const COMMON_BASES = [...getAllBases()];

const DEFAULT_POOL_LIST = [...getAllPools()];

module.exports = {
  DEFAULT_TOKEN_LIST,
  COMMON_BASES,
  DEFAULT_POOL_LIST,
};
