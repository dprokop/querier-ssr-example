import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Icon, { IconType } from 'ui/kit/Icon/Icon';

const iconBoxStyle = {
  width: '80px',
  height: '80px',
  border: '1px solid lightgrey',
  display: 'flex',
  'flex-direction': 'column',
  'justify-content': 'center',
  'align-items': 'center',
  'padding': '5px'
};

const iconStyle = {
  'padding': '5px'
};

const containerStyle = {
  display: 'flex',
  'justify-content': 'space-around'
};

const captionStyle = {
  color: 'grey',
  'font-size': '12px'
};

storiesOf('Iconography', module).add('default', () => {
  const icons: Array<IconType> = [
    'calendar',
    'check',
    'creditCard',
    'doc',
    'edit',
    'equal',
    'link',
    'location',
    'minus',
    'plus',
    'save'
  ];
  return (
    <div style={containerStyle}>
      {icons.map((icon, i) => {
        return (
          <div key={i} style={iconBoxStyle}>
            <div style={iconStyle}><Icon name={icon} /></div> <span style={captionStyle}>{icon}</span>
          </div>
        );
      })}
    </div>
  );
});
