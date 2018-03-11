import { format } from 'currency-formatter';
import { MoneyData } from 'data/model';
import * as React from 'react';

interface CurrencyFormatterProps {
  price: MoneyData;
  displayPriceModifier?: boolean;
}

const CurrencyFormatter = ({price, displayPriceModifier}: CurrencyFormatterProps) => {
  const formattedValue = format(price.amount, { code: price.currency.code });
  let priceModifier = '';

  if (displayPriceModifier) {
    if (price.amount > 0) {
      priceModifier = '+';
    }
  }

  return (
    <React.Fragment>{priceModifier}{formattedValue}</React.Fragment>
  );
};

export default CurrencyFormatter;
