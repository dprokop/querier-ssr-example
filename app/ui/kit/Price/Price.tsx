import * as React from 'react';
import * as classNames from 'classnames';
const css = require('./Price.css');

interface PriceProps {
  className?: string;
  amount: number;
  currency: {
    code: string;
  };
}

const Price = ({ className, amount, currency }: PriceProps) => {
  const classes = classNames(css.Price, className);
  const {code} = currency;
  return (
    <div className={classes}>
        {/* TODO: Refactor to PriceFormatter */}
        {amount} {code}
    </div>
  );
};

export default Price;
