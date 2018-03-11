import * as React from 'react';
import * as classNames from 'classnames';

const css = require('./Input.css');

interface InputProps extends WithClassName {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  label?: string;
  name?: string;
  placeholder?: string;
  type: string;
  error?: string;
}

const Input = (props: InputProps) => {
  const {label, error, className, ...inputProps} = props;
  const inputClassNames = classNames(
    css.Input,
    error && css.inputInvalid,
    className,
  );

  return (
    <div className={inputClassNames}>
      {label && <label className={css.label}>{label}</label>}
      <input className={css.inputElement} {...inputProps}/>
      {error && <small className={css.errorMessage}>{error}</small>}
    </div>
  );
};

export default Input;
