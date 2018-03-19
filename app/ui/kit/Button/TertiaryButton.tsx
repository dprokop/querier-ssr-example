import classNames from 'classnames';
import * as React from 'react';
import Button, { ButtonProps } from 'app/ui/kit/Button/Button';
const css = require('./TertiaryButton.css');

const TertiaryButton = (buttonProps: ButtonProps) => {
    const finalClassName = classNames(
        css.TertiaryButton,
        buttonProps.disabled && css.disabled
    );
    return <Button {...buttonProps} className={finalClassName} />;
};

export default TertiaryButton;
