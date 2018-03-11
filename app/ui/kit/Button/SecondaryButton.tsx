import * as React from 'react';
import Button, { ButtonProps } from 'app/ui/kit/Button/Button';
const css = require('./SecondaryButton.css');

const SecondaryButton = (buttonProps: ButtonProps) => {
    return <Button {...buttonProps} className={css.SecondaryButton} />;
};

export default SecondaryButton;
