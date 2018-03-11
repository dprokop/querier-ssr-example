import { storiesOf } from '@storybook/react';
import * as React from 'react';

import AccordionPanel from './AccordionPanel';

storiesOf('AccordionPanel', module)
  .add('default', () => {
    return (
      <AccordionPanel title="Accordion Title">
        Simple text
      </AccordionPanel>
    );
  })
  .add('with component', () => {
    const ExampleComponent = () => <div>Simple component</div>;

    return (
      <AccordionPanel title="Accordion Title">
        <ExampleComponent/>
      </AccordionPanel>
    );
  });
