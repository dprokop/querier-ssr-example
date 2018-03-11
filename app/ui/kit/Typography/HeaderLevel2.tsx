import * as React from 'react';
import * as classNames from 'classnames';
const css = require('./HeaderLevel2.css');

interface HeaderLevel2Props {
  className?: string;
  children: string | JSX.Element;
}

const HeaderLevel2 = ({ className, children }: HeaderLevel2Props) => {

  const classes = classNames(
    css.HeaderLevel2,
    className
);
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default HeaderLevel2;
