import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Button, { ButtonProps } from './Button';
import { ComponentType, ReactChild } from 'react';
import SecondaryButton from 'app/ui/kit/Button/SecondaryButton';
import TertiaryButton from 'app/ui/kit/Button/TertiaryButton';

interface ButtonSectionProps {
  title: string;
  component?: ComponentType<{
    className?: string;
    children?: ReactChild;
    itemElement?: string | React.ComponentType<ButtonProps>;
  }>;
}

const buttonsGuide: Array<ButtonSectionProps> = [
  {
    title: 'Primary button',
    component: Button,
  },
  {
    title: 'Secondary button',
    component: SecondaryButton,
  },
  {
    title: 'Tertiary Button',
    component: TertiaryButton
  }
];

const ButtonSectionStyle = {
  marginBottom: '40px',
};

const ButtonSection = ({ title, component }: ButtonSectionProps) => {
  return (
    <div style={ButtonSectionStyle}>
      <div>
        {component && React.createElement(component, {
          children: title
        })}
      </div>
    </div>
  );
};
storiesOf('Button', module)
  .add('Primary', () => {
    return (
      <div> {
        buttonsGuide.map((b, i) => {
          return (
            <ButtonSection
              key={i}
              component={b.component}
              title={b.title}
            />
          );
        })
      }</div>
    );
  });
