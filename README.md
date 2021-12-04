# GlobianceDEX - default-token-list

This is the module which contains the list of tokens which will be available by default for swapping on [GlobianceDEX](https://dex.globiance.com) for everyone. This module also enlists the default set of pool visible in the [pool list](http://dex.globiance.com/pool).

## Listing a token

To request a new token listing you can do any of the following:

1. Generate [new issue](https://github.com/Globiance/default-token-list/issues/new/choose) with all details
2. Generate a Pull Request ( PR ) by add your logo ( as per [format](#token-logo-format) ) to [assets](https://github.com/Globiance/default-token-list/tree/master/src/assets) and add a JSON file containing details of the token in the [directory](https://github.com/Globiance/default-token-list/tree/master/src/tokens). 


Format of the JSON file:

* Filename must be token name in lowercase

```
{
  "name": ,
  "symbol": "",
  "address": "",
  "decimals": ,
  "feeOnTransfer": 
}
```

Sample:

```
{
  "name": "Globiance Exchange Token",
  "symbol": "GBEX",
  "address": "xdc34514748f86a8da01ef082306b6d6e738f777f5a",
  "decimals": 18,
  "feeOnTransfer": true
}
```

## Listing a Pool

To enlist a pool in the default liquidity [pools list](http://dex.globiance.com/pool) add PR with corresponding pool details added in [directory](https://github.com/Globiance/default-token-list/tree/master/src/pools) 

Format:

* Filename must be pair address
* all token names must be in lowercase

File Structure:

```
{
  "first": "",
  "second": "",
  "address": ""
}
```

Sample:

```
{
  "first": "gbex",
  "second": "xdc",
  "address": "xdc1aF38719EdEFE7D2aE5923198CCeea821968278F"
}
```


## Token Logo Format

Token logo needs to be in a .PNG format with preferrable dimensions of 50x50 px