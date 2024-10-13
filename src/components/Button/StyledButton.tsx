import React, { ReactNode } from 'react';
import { StyledButton } from './StyledButton.styled';

interface ButtonProps {
  className?: string;  // Optional className prop
  children: ReactNode;  // Required children prop
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <StyledButton className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;