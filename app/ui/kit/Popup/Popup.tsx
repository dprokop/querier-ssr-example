import * as React from 'react';
const css = require('./Popup.css');
import { CSSTransition } from 'react-transition-group';
import * as classNames from 'classnames';

interface PopupProps {
  onClick?: () => void;
  onHover?: () => void;
  onLeave?: () => void;
  className?: string;
  children: JSX.Element;
  popper?: JSX.Element;
}

interface PopupState {
  isActive: boolean;
  isVisible: boolean;
}
class Popup extends React.Component<PopupProps, PopupState> {
  constructor(props: PopupProps) {
    super(props);
    this.state = {
      isActive: false,
      isVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick(e: React.MouseEvent<EventTarget>) {
    e.preventDefault();
    const { onClick } = this.props;

    if (onClick) {
      onClick();
    }
  }

  handleMouseEnter(e: React.MouseEvent<EventTarget>) {
    e.preventDefault();
    const { onHover } = this.props;

    if (onHover) {
      onHover();
    }
    this.setState({ isActive: true });
  }

  handleMouseLeave(e: React.MouseEvent<EventTarget>) {
    e.preventDefault();
    const { onLeave } = this.props;

    if (onLeave) {
      onLeave();
    }
    this.setState({ isActive: false });
  }

  render() {
    const { popper, children, className } = this.props;
    const { isActive, isVisible } = this.state;
    const finalClassName = classNames(
      className,
      css.Popup
    );
    const popperClassName = classNames(
      css.popperInit,
      isVisible && css.popperEntered
    );
    const PopupComponent =
      popper && (
        <CSSTransition
          in={isActive}
          timeout={200}
          onEntered={() => { this.setState({ isVisible: true }); }}
          onExited={() => { this.setState({ isVisible: false }); }}
          classNames={{}}
        >
          {React.cloneElement(popper, { className: popperClassName })}
        </CSSTransition>
      );
    return (
      <div className={finalClassName}>
        {PopupComponent}
        <div
          className={css.trigger}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Popup;
