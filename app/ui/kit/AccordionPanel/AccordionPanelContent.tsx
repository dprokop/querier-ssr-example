import * as React from 'react';
const css = require('./AccordionPanelContent.css');
interface AccordionPanelContentProps {
  className?: string;
  children: string | JSX.Element;
}

const AccordionPanelContent = ({
  className,
  children
}: AccordionPanelContentProps) => {
  return (
    <div className={className}>
      <div className={css.AccordionPanelContent}>{children}</div>
    </div>
  );
};

export default AccordionPanelContent;
