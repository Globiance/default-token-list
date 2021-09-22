const fs = require("fs");
const path = require("path");

function getAssetLogo(name) {
  return fs
    .readFileSync(path.join(__dirname, "./assets", `${name}.png`))
    .toString("base64");
}

const DEFAULT_TOKEN_LIST = [
  {
    logo: getAssetLogo("srx"),
    name: "StorX Network",
    symbol: "SRX",
    address: "xdc5d5f074837f5d4618b3916ba74de1bf9662a3fed",
  },
  {
    logo: getAssetLogo("xdc"),
    name: "XinFin Network",
    symbol: "XDC",
    address: "",
  },
  {
    logo: getAssetLogo("gbex"),
    name: "Globiance Network",
    symbol: "GBEX",
    address: "",
  },
  {
    logo: getAssetLogo("eurg"),
    name: "Euro Stablecoin",
    symbol: "EURG",
    address: "",
  },
  {
    logo: getAssetLogo("usdg"),
    name: "USD Stablecoin",
    symbol: "USDG",
    address: "",
  },
  {
    logo: getAssetLogo("sgdg"),
    name: "SGD Stablecoin",
    symbol: "SGDG",
    address: "",
  },
  {
    logo: getAssetLogo("gbpg"),
    name: "GBP Stablecoin",
    symbol: "GBPG",
    address: "",
  },
  {
    logo: getAssetLogo("hkdg"),
    name: "HKD Stablecoin",
    symbol: "HKDG",
    address: "",
  },
  {
    logo: getAssetLogo("wxdc"),
    name: "Wrapped XDC",
    symbol: "WXDC",
    address: "",
  },
];

const COMMON_BASES = [
  {
    logo: getAssetLogo("xdc"),
    name: "XinFin Network",
    symbol: "XDC",
    address: "",
  },
  {
    logo: getAssetLogo("wxdc"),
    name: "Wrapped XDC",
    symbol: "WXDC",
    address: "",
  },
  {
    logo: getAssetLogo("gbex"),
    name: "Globiance Network",
    symbol: "GBEX",
    address: "",
  },
  {
    logo: getAssetLogo("eurg"),
    name: "Euro Stablecoin",
    symbol: "EURG",
    address: "",
  },
  {
    logo: getAssetLogo("sgdg"),
    name: "SGD Stablecoin",
    symbol: "SGDG",
    address: "",
  },
];

module.exports = {
  DEFAULT_TOKEN_LIST,
  COMMON_BASES,
};
