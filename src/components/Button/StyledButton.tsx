import React, { ReactNode } from 'react';
import { StyledButton } from './StyledButton.styled';

interface ButtonProps {
  children: ReactNode;  // Required children prop
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <StyledButton >
      {children}
    </StyledButton>
  );
};

export default Button;