import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button type="submit" {...rest}>
    {children}
  </button>
);

export default Button;
