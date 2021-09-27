export interface Token {
  logo: string;
  name: string;
  symbol: string;
  address: string;
  decimals: number;
}

export const DEFAULT_TOKEN_LIST: Array<Token>

export const COMMON_BASES: Array<Token>