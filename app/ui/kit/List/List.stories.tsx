import * as React from 'react';
import { storiesOf } from '@storybook/react';

import List from './List';

const list = [
  { name: 'Item1'},
  { name: 'Item2'},
  { name: 'Item3'}
];
interface DataInterface {
  name: string;
}
const renderItem = (data: DataInterface ) => {
  const { name } = data;
  return <div key={name}>{name}</div>;
};
storiesOf('List', module)
.add('default', () => {
  return <List items={list} itemRenderer={renderItem}/>;
});
