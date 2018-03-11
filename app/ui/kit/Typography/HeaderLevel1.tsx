import * as React from 'react';
import * as classNames from 'classnames';
const css = require('./HeaderLevel1.css');

interface HeaderLevel1Props {
  className?: string;
  children: string | JSX.Element;
}

const HeaderLevel1 = ({ className, children }: HeaderLevel1Props) => {

  const classes = classNames(
    css.HeaderLevel1,
    className
);
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default HeaderLevel1;
