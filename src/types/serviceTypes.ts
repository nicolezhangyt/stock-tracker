export enum RequestState {
  read = 'read',
}

export interface ApiRequest {
  id: number;
  no_result_if_limit: boolean;
  offset: number;
  size: number;
  state: RequestState.read;
  rules: string;
}

export interface ApiResponse {
  data: Company[];
  meta: {
    total_records: number;
    real_total_records: number;
    state: string;
    noResultIfLimit: boolean;
    pe: number;
    return_1yr_abs: number;
    return_7d: number;
  };
}

export interface Score {
  value: number;
  income: number;
  health: number;
  past: number;
  future: number;
  management: number;
  misc: number;
  total: number;
  sentence: string;
}

export interface Company {
  id: number;
  company_id: string;
  trading_item_id: number;
  name: string;
  slug: string;
  exchange_symbol: string;
  ticker_symbol: string;
  unique_symbol: string;
  primary_ticker: boolean;
  last_updated: number;
  canonical_url: string;
  primary_canonical_url: string;
  is_searchable: boolean;
  isin_symbol: string;
  score: {
    data: Score;
  };
  grid: {
    data: {
      year_founded: number;
      description: string;
      logo_url: string;
      share_price: number;
      market_cap: number;
      pe: number;
      pb: number;
      price_to_sales: number;
      analyst_count: number;
      return_1d: number;
      return_7d: number;
      return_1yr_abs: number;
      price_target: number;
      growth_3y: number;
      net_income_growth_annual: number;
      revenue_growth_annual: number;
      dividend_yield: number;
      primary_industry: {
        id: number;
        name: string;
      };
      currency_info: {
        reporting_unit_abs: number;
        reporting_currency_iso: string;
        trading_item_currency_iso: string;
        reporting_unit_text: string;
        reporting_unit_text_abs: string;
        primary_trading_item_currency_symbol: string;
        reporting_currency_symbol: string;
        reporting_unit: number;
        trading_item_currency_symbol: string;
        primary_trading_item_currency_iso: string;
      };
      main_thumb: string;
      main_header: string;
    };
  };
}

export enum MarketCapOrder {
  desc = 'desc',
  asc = 'asc',
}
