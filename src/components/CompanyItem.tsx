import { Company } from '../types/serviceTypes';
import { formatMarketCap, formatPercentage } from '../utils/helpers';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

type CompanyItemProps = {
  company: Company;
};

function CompanyItem({ company }: CompanyItemProps) {
  const {
    share_price,
    return_7d,
    return_1yr_abs,
    market_cap,
    pb,
    growth_3y,
    dividend_yield,
    primary_industry,
    currency_info,
    price_target,
  } = company.grid.data;

  const { future, value, health, income, past } = company.score.data;

  const marketCapString = formatMarketCap(market_cap);
  const sevenDayReturn = formatPercentage(return_7d);
  const oneYearReturn = formatPercentage(return_1yr_abs);
  const dividendYield = formatPercentage(dividend_yield);
  const threeYearGrowth = formatPercentage(growth_3y);

  return (
    <tr className="border-b-0.5 border-white hover:bg-hoverDark leading-6 text-sm ">
      <td>
        <RadarChart
          captions={{
            future: '',
            value: '',
            income: '',
            health: '',
            past: '',
          }}
          data={[
            {
              data: {
                future: future / 10,
                value: value / 10,
                income: income / 10,
                health: health / 10,
                past: past / 10,
              },
              meta: { color: '#FFA500' },
            },
          ]}
          size={80}
        />
      </td>
      <td className="max-w-xs">
        <div className="text-sky-600 font-semibold">
          {company.ticker_symbol}
        </div>
        <div
          className="inline-block text-gray-400 border-dashed border-gray-400 border-b-1 cursor-pointer"
          title={company.grid.data.description}
        >
          {company.name}
        </div>
      </td>
      <td>
        {currency_info?.primary_trading_item_currency_symbol}
        {share_price}
      </td>
      <td className={return_7d < 0 ? 'text-red-500' : 'text-green-500'}>
        {sevenDayReturn}
      </td>
      <td className={return_1yr_abs < 0 ? 'text-red-500' : 'text-green-500'}>
        {oneYearReturn}
      </td>
      <td>
        {currency_info?.primary_trading_item_currency_symbol}
        {marketCapString}
      </td>
      <td>
        {' '}
        {currency_info?.primary_trading_item_currency_symbol}
        {price_target?.toFixed(2)}
      </td>
      <td>
        <span
          className="border-dashed border-gray-400 border-b-1 cursor-pointer"
          title={`PB ${pb}`}
        >
          PB
        </span>{' '}
        {pb?.toFixed(1)}
      </td>
      <td>
        <span title={`Earning Growth ${threeYearGrowth}`}>E </span>
        {threeYearGrowth}
      </td>
      <td>{dividendYield}</td>
      <td>{primary_industry?.name}</td>
    </tr>
  );
}

export default CompanyItem;
