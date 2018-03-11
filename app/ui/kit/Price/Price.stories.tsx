import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Price from './Price';

storiesOf('Price', module)
  .add('default', () => {
    const price = {
      amount: 120,
      currency: {
        code: 'USD'
      }
    };
    return <Price {...price} />;
  });
