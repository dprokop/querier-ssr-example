import * as React from 'react';
const css = require('./List.css');
import * as classNames from 'classnames';
interface ListProps {
  className?: string;
  items: Array<string|{}>; // array of obj and what if I want string
  itemRenderer: (item: {}) => JSX.Element;
}
const List = (props: ListProps) => {
  const {className, items, itemRenderer } = props;

  const classes = classNames(css.List, className);
  const itemsComponent = items.map((item, key) => {
    return (
      <li className={css.listItem} key={key}>
        {itemRenderer(item)}
      </li>
    );
  });

  return (
    <ul className={classes}>
      {itemsComponent}
    </ul>
  );
};

export default List;
