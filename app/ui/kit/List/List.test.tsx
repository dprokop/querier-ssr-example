import * as React from 'react';
import { mount } from 'enzyme';
import List from './List';

const getList = (items: Array<{}>, itemRenderer: (item: {}) => JSX.Element) => {
  return <List items={items} itemRenderer={itemRenderer} />;
};

const list = [1, 2, 3];
const CustomItem = () => <div>Custom Item</div>;

const renderItem = (data: number) => {
  return <CustomItem/>;
};

describe('List', () => {
  test('renders custom items', () => {
    const wrapper = mount(getList(list, renderItem));
    expect(wrapper.find(CustomItem)).toHaveLength(3);
  });
});
