export const formatMarketCap = (marketCapValue: number): string => {
  const BILLION = 1000000000;
  const MILLION = 1000000;
  if (marketCapValue >= BILLION) {
    // Convert to billions
    marketCapValue /= BILLION;
    return marketCapValue.toFixed(1) + 'b';
  } else if (marketCapValue >= MILLION) {
    // Convert to millions
    marketCapValue /= MILLION;
    return marketCapValue.toFixed(1) + 'm';
  } else {
    // Format with commas for thousands
    return marketCapValue.toLocaleString();
  }
};

export const formatPercentage = (number: number): string => {
  return (number * 100).toFixed(1) + '%';
};
