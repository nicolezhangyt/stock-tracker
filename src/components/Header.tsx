import { useMemo } from 'react';
import countries from '../data/countries.json';
import { EXCHANGE_SYMBOL_MAP } from '../common/constant';

type HeaderProp = {
  selectedCountryCode: string;
};
function Header({ selectedCountryCode = 'AU' }: HeaderProp) {
  const date = new Date();
  const defaultCountry = useMemo(
    () =>
      countries.find((country) => country.countryCode === selectedCountryCode),
    [selectedCountryCode],
  );

  const countryAdjective = defaultCountry?.countryAdjective;
  const exchangeSymbol = EXCHANGE_SYMBOL_MAP[selectedCountryCode];

  return (
    <div className="">
      <h2 className="text-2xl mb-2">
        {' '}
        {exchangeSymbol
          ? `Largest ${countryAdjective} (${exchangeSymbol}) Stocks by Market Cap`
          : `Largest ${countryAdjective} Stocks by Market Cap`}
      </h2>
      <p className="text-sm">
        {' '}
        <span className="text-gray-400 mr-2">UPDATE</span>
        {date.toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}
      </p>
      <p className="text-sm text-gray-400	my-4">
        {`Discover large cap ${countryAdjective} companies that are on the ${exchangeSymbol}. These companies are organised by Market Cap.`}
      </p>
    </div>
  );
}

export default Header;
