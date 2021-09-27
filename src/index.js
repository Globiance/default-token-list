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
    decimals: 18
  },
  {
    logo: getAssetLogo("xdc"),
    name: "XinFin Network",
    symbol: "XDC",
    address: "",
    decimals: 18
  },
  {
    logo: getAssetLogo("gbex"),
    name: "Globiance Network",
    symbol: "GBEX",
    address: "",
    decimals: 18
  },
  {
    logo: getAssetLogo("eurg"),
    name: "Euro Stablecoin",
    symbol: "EURG",
    address: "",
    decimals: 18
  },
  {
    logo: getAssetLogo("usdg"),
    name: "USD Stablecoin",
    symbol: "USDG",
    address: "",
    decimals: 18
  },
  {
    logo: getAssetLogo("sgdg"),
    name: "SGD Stablecoin",
    symbol: "SGDG",
    address: "",
    decimals: 18
  },
  {
    logo: getAssetLogo("gbpg"),
    name: "GBP Stablecoin",
    symbol: "GBPG",
    address: "",
    decimals: 18
  },
  {
    logo: getAssetLogo("hkdg"),
    name: "HKD Stablecoin",
    symbol: "HKDG",
    address: "",
    decimals: 18
  },
  {
    logo: getAssetLogo("wxdc"),
    name: "Wrapped XDC",
    symbol: "WXDC",
    address: "0x6A67DE9634A30901E11fCC0C9A23b9A11b84a264",
    decimals: 18
  },
  {
    logo: getAssetLogo("default"),
    name: "Test Token A",
    symbol: "TKNA",
    address: "0xB2f380Fe2AbBF248D335d67D15Da67b0c6EC8060",
    decimals: 18
  },
  {
    logo: getAssetLogo("default"),
    name: "Test Token B",
    symbol: "TKNB",
    address: "0x1A0712E03A402459a4B3AC36C5B3ED0F19582c13",
    decimals: 18
  },
];

const COMMON_BASES = [
  {
    logo: getAssetLogo("xdc"),
    name: "XinFin Network",
    symbol: "XDC",
    address: "",
    decimals: 18
  },
  {
    logo: getAssetLogo("wxdc"),
    name: "Wrapped XDC",
    symbol: "WXDC",
    address: "",
    decimals: 18
  },
  {
    logo: getAssetLogo("gbex"),
    name: "Globiance Network",
    symbol: "GBEX",
    address: "",
    decimals: 18
  },
  {
    logo: getAssetLogo("eurg"),
    name: "Euro Stablecoin",
    symbol: "EURG",
    address: "",
    decimals: 18
  },
  {
    logo: getAssetLogo("sgdg"),
    name: "SGD Stablecoin",
    symbol: "SGDG",
    address: "",
    decimals: 18
  },
];

module.exports = {
  DEFAULT_TOKEN_LIST,
  COMMON_BASES,
};
