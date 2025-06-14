'use client';

import './styles.css';

enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary'
}

interface ButtonProps {
  children: string;
  type?: HTMLButtonElement['type'];
  variant?: `${ButtonVariant}`;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  type = 'button',
  variant = ButtonVariant.primary,
  onClick,
  disabled = false
}: ButtonProps) => (
  <button
    type={type}
    disabled={disabled}
    className={`btn btn-${variant}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;