import React from 'react';
import { StyledButton } from './Styles';
import ButtonImage from './ButtonImage';
import ButtonText from './ButtonText';
import ButtonTooltip from './ButtonTooltip';

export interface ButtonProps {
  children: React.ReactNode;
  reverse?: boolean;
  onClick?: () => void;
  width?: string;
  height?: string;
  fontSize?: string;
  fontFamily?: string;
  selected?: boolean;
  top?: string;
  right?: string;
}

const Button: React.FC<ButtonProps> & {
  Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  Text: React.FC<{ fontSize?:string, fontFamily?:string, children: React.ReactNode }>;
  Tooltip: React.FC<{ children: React.ReactNode }>;
} = ({ reverse, onClick, children, width, height, fontSize, selected,top, right }) => {
  return (
    <StyledButton
      onClick={onClick}
      reverse={reverse}
      width={width}
      height={height}
      fontSize={fontSize}
      selected={selected}
      top={top}
      right={right}
    >
      {children}
    </StyledButton>
  );
};

Button.Image = ButtonImage;
Button.Text = ButtonText;
Button.Tooltip = ButtonTooltip;

export default Button;
