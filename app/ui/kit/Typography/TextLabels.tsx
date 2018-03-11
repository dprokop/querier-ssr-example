import * as React from 'react';
import * as classNames from 'classnames';
const css = require('./TextLabels.css');

interface TextLabelsProps {
  className?: string;
  children: string | JSX.Element;
}

export const TextLabel = ({ className, children }: TextLabelsProps) => {
  const classes = classNames(
    css.TextLabel,
    className
  );
  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export const TextLabelSmall = ({children, ...otherProps}: TextLabelsProps) => {
  return <TextLabel {...otherProps}><small>{children}</small></TextLabel>;
};

export const TextLabelSmallMediumGrey = ({ className, ...otherProps }: TextLabelsProps) => {
  return <TextLabelSmall className={css.mediumGrey} {...otherProps} />;
};
