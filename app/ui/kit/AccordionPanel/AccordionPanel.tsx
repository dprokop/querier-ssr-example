import * as React from 'react';
import AccordionPanelTitle from './AccordionPanelTitle';
import AccordionPanelContent from './AccordionPanelContent';
const css = require('./AccordionPanel.css');
import * as classNames from 'classnames';

interface AccordionPanelProps {
  className?: string;
  title: string;
  children: string | JSX.Element;
}
class AccordionPanel extends React.Component<
  AccordionPanelProps,
  { isActive: boolean }
> {
  constructor(props: AccordionPanelProps) {
    super(props);
    this.state = {
      isActive: false
    };
    this.handleAccordionPanelClick = this.handleAccordionPanelClick.bind(this);
  }

  handleAccordionPanelClick() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const { className, title, children } = this.props;
    const { isActive } = this.state;
    const finalTitleClassName = classNames(
      css.title,
      isActive && css.titleActive
    );
    const finalContentClassName = classNames(
      css.content,
      isActive && css.contentExpanded
    );

    return (
      <div className={classNames(css.AccordionPanel, className)}>
        <AccordionPanelTitle
          onClick={this.handleAccordionPanelClick}
          className={finalTitleClassName}
          isActive={isActive}
        >
          {title}
        </AccordionPanelTitle>
        {this.state.isActive && <AccordionPanelContent className={finalContentClassName}>
          {children}
        </AccordionPanelContent>}
      </div>
    );
  }
}

export default AccordionPanel;
