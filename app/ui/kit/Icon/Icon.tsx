import * as React from 'react';
import classNames from 'classnames';
import capitalizeFirstLetter from 'app/utils/string/capitalizeFirstLetter';

export type IconType = 'calendar'
| 'check'
| 'creditCard'
| 'doc'
| 'edit'
| 'equal'
| 'link'
| 'location'
| 'minus'
| 'plus'
| 'save';
interface IconProps {
  className?: string;
  name: IconType;
}

const Icon = ({ className, name }: IconProps) => {
  const iconName = `icon${capitalizeFirstLetter(name)}`;
  return <i className={classNames(iconName, className)} />;
};

export default Icon;
