import React from 'react';
import { PrimaryButton, OutlinedButton } from './button.styled';

interface ButtonProps {
  className?: string;
  isOutlined?: boolean;
  disabled?: boolean;
  label: string;
}

const Button = ({
  className = '',
  isOutlined = false,
  disabled,
  label,
}: ButtonProps): JSX.Element => {
  const Component = isOutlined ? OutlinedButton : PrimaryButton;

  return (
    <Component className={className} disabled={disabled}>
      {label}
    </Component>
  );
};

export default Button;
