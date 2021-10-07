const fs = require("fs");
const path = require("path");

function getAssetLogo(name) {
  return (
    "data:image/png;base64, " +
    fs
      .readFileSync(path.join(__dirname, "./assets", `${name}.png`))
      .toString("base64")
  );
}

const DEFAULT_TOKEN_LIST = [
  {
    logo: getAssetLogo("srx"),
    name: "StorX Network",
    symbol: "SRX",
    address: "xdc55e574e7d0256ff50f86ee8cd90e4a8e22aa1f85",
    decimals: 18,
  },
  {
    logo: getAssetLogo("xdc"),
    name: "XinFin Network",
    symbol: "XDC",
    address: "xdcc039850F937C623024DA66D6dF370022E6F16e30",
    decimals: 18,
  },
  {
    logo: getAssetLogo("gbex"),
    name: "Globiance Network",
    symbol: "GBEX",
    address: "xdc2049552f4f55b8af48c86ed9866a66e7d2bcd0fc",
    decimals: 18,
  },
  {
    logo: getAssetLogo("eurg"),
    name: "Euro Stablecoin",
    symbol: "EURG",
    address: "xdcb128a44f005cbe7ddaeb1860c16821842895ec7a",
    decimals: 18,
  },
  {
    logo: getAssetLogo("usdg"),
    name: "USD Stablecoin",
    symbol: "USDG",
    address: "xdc7bd4983e237f351f2c94006097b2718403ff740f",
    decimals: 18,
  },
  {
    logo: getAssetLogo("sgdg"),
    name: "SGD Stablecoin",
    symbol: "SGDG",
    address: "xdcd14ef8829e8bcb2c71d1b75fa6b1915680f089ed",
    decimals: 18,
  },
  {
    logo: getAssetLogo("gbpg"),
    name: "GBP Stablecoin",
    symbol: "GBPG",
    address: "xdc17c92b3e3b3fa8dc8ae44c749fefab1adc5e3506",
    decimals: 18,
  },
  {
    logo: getAssetLogo("hkdg"),
    name: "HKD Stablecoin",
    symbol: "HKDG",
    address: "xdce5c5e7e5eaacf28b2dd505a58c793c83a239ee4a",
    decimals: 18,
  },
  {
    logo: getAssetLogo("wxdc"),
    name: "Wrapped XDC",
    symbol: "WXDC",
    address: "xdcc039850F937C623024DA66D6dF370022E6F16e30",
    decimals: 18,
  },
];

const COMMON_BASES = [
  {
    logo: getAssetLogo("xdc"),
    name: "XinFin Network",
    symbol: "XDC",
    address: "xdcc039850F937C623024DA66D6dF370022E6F16e30",
    decimals: 18,
  },
  {
    logo: getAssetLogo("wxdc"),
    name: "Wrapped XDC",
    symbol: "WXDC",
    address: "xdcc039850F937C623024DA66D6dF370022E6F16e30",
    decimals: 18,
  },
  {
    logo: getAssetLogo("gbex"),
    name: "Globiance Network",
    symbol: "GBEX",
    address: "xdc2049552f4f55b8af48c86ed9866a66e7d2bcd0fc",
    decimals: 18,
  },
  {
    logo: getAssetLogo("eurg"),
    name: "Euro Stablecoin",
    symbol: "EURG",
    address: "xdcb128a44f005cbe7ddaeb1860c16821842895ec7a",
    decimals: 18,
  },
  {
    logo: getAssetLogo("sgdg"),
    name: "SGD Stablecoin",
    symbol: "SGDG",
    address: "xdcd14ef8829e8bcb2c71d1b75fa6b1915680f089ed",
    decimals: 18,
  },
];

const DEFAULT_POOL_LIST = [];

module.exports = {
  DEFAULT_TOKEN_LIST,
  COMMON_BASES,
  DEFAULT_POOL_LIST,
};
