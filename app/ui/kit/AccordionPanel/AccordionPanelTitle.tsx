import * as React from 'react';
import classNames from 'classnames';
const css = require('./AccordionPanelTitle.css');
import Icon from 'ui/kit/Icon/Icon';

interface AccordionPanelTitleProps {
  className?: string;
  children: string | JSX.Element;
  onClick: () => void;
  isActive: boolean;
}

const AccordionPanelTitle = ({
  className,
  children,
  onClick,
  isActive
}: AccordionPanelTitleProps) => {
  const classes = classNames(css.AccordionPanelTitle, className);
  const iconComponent = isActive ? <Icon name="minus"/> : <Icon name="plus"/>;
  return (
    <div className={classes} onClick={onClick}>
      {children}
      {iconComponent}
    </div>
  );
};

export default AccordionPanelTitle;
