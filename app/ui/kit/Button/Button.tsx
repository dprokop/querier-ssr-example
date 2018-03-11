import * as classNames from 'classnames';
import * as React from 'react';

const css = require('./Button.css');

export interface ButtonProps {
  onClick?: (e?: React.MouseEvent<{}>) => void;
  className?: string;
  disabled?: boolean;
  type?: string;
  itemElement?: string | React.ComponentType<ButtonProps>;
  children?: React.ReactChild;
  loading?: boolean;
}

class Button extends React.Component<ButtonProps, {}>  {
  constructor(props: ButtonProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<EventTarget>) {
    const { onClick } = this.props;

    if (onClick) {
      e.preventDefault();
      onClick();
    }
  }

  render() {
    const { children, className, disabled, type, itemElement, loading } = this.props;
    const buttonProps = {
      type,
      disabled: !!disabled,
      onClick: this.handleClick,
      className: classNames(css.Button, disabled && css.disabled, className)
    };
    const content = loading ? 'Please wait...' : children;
    return React.createElement(itemElement || 'button',  {...buttonProps}, content);
  }
}

export default Button;
