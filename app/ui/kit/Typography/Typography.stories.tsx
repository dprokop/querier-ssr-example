import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ComponentClass, SFC, StatelessComponent } from 'react';

import HeaderLevel1 from './HeaderLevel1';
import HeaderLevel2 from './HeaderLevel2';
import HeaderLevel3 from './HeaderLevel3';
import { TextLabel, TextLabelSmall, TextLabelSmallMediumGrey } from './TextLabels';

type TypographySectionProps = {
  title: string;
  component?: ComponentClass<{
    className?: string;
    children: string | JSX.Element;
  }> | StatelessComponent<{
    className?: string;
    children: string | JSX.Element;
  }> | SFC<{
    className?: string;
    children: string | JSX.Element;
  }>;
  content: string;
};

const typographyGuide: Array<TypographySectionProps> = [
  {
    title: 'Level 1 heading',
    component: HeaderLevel1,
    content: 'My order summary'
  },
  {
    title: 'Level 2 heading',
    component: HeaderLevel2,
    content: 'HÅG Capisco'
  },
  {
    title: 'Level 3 heading',
    component: HeaderLevel3,
    content: 'HÅG Capisco'
  },
  {
    title: 'Body text',
    component: (props: { children: string | JSX.Element }) => <span>{props.children}</span>,
    content: 'HÅG Capisco'
  },
  {
    title: 'Body text small',
    component: (props: { children: string | JSX.Element }) => <small>{props.children}</small>,
    content: 'HÅG Capisco'
  },
  {
    title: 'Text label',
    component: TextLabel,
    content: 'Go to checkout'
  },
  {
    title: 'Text label small',
    component: TextLabelSmall,
    content: 'Customize your chair'
  },
  {
    title: 'Text label small medium grey',
    component: TextLabelSmallMediumGrey,
    content: 'Selected'
  },
];
const TypographySectionStyle = {
  marginBottom: '40px',
};

const TypographySectionTitleStyle = {
  fontSize: '12px',
  textTransform: 'uppercase',
  textAlign: 'right',
  marginBottom: '5px',
  color: '#bdbdbd',
  borderBottom: '1px solid #E9E9E9'
};

const TypographySection = ({ title, component, content }: TypographySectionProps) => {

  return (
    <div style={TypographySectionStyle}>
      <div style={TypographySectionTitleStyle}>
        {title}
      </div>
      <div>
        {component && React.createElement(component, {
          children: content
        })}

      </div>
    </div>
  );
};

storiesOf('Typography', module).add('default', () => {
  return (
    <div>
      {typographyGuide.map((t, i) => {
        return (
          <TypographySection
            key={i}
            component={t.component}
            content={t.content}
            title={t.title}
          />
        );
      })}
    </div>
  );
});
