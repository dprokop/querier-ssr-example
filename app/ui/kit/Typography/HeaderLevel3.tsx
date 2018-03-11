import * as React from 'react';
import * as classNames from 'classnames';
const css = require('./HeaderLevel3.css');

interface HeaderLevel3Props {
  className?: string;
  children: string | JSX.Element;
}

const HeaderLevel3 = ({ className, children }: HeaderLevel3Props) => {

  const classes = classNames(
    css.HeaderLevel3,
    className
);
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default HeaderLevel3;
