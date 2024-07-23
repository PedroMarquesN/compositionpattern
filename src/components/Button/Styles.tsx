import styled from 'styled-components';

interface StyledButtonProps {
  reverse?: boolean;
  width?: string;
  height?: string;
  fontSize?: string;
  fontFamily?: string;
  selected?: boolean;
  top?: string;
  right?: string;
}

interface TextProps {
  fontSize?: string;
  fontFamily?: string;
}

export const Text = styled.span<TextProps>`
  font-size: ${props => props.fontSize || '16px'};
  font-family: ${props => props.fontFamily || 'inherit'};
  margin: 0 5px;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  position: absolute;
  top: ${props => props.top || 'auto'}; 
  right: ${props => props.right || 'auto'}; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${({ selected }) => (selected ? '#fff' : '#97B43C')};
  border: none;
  border-radius: ${({ theme }) => theme.radius[1]};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  outline: none;

  &:hover {
    background-color: #718531;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(98, 156, 103, 0.5);
  }

  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
`;

export const Image = styled.img`
  max-width: 24px;
  max-height: 24px;
  margin: 0 5px;
`;


export const Tooltip = styled.span`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  background-color: #333;
  color: #fff;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s;
  visibility: hidden;

  ${StyledButton}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;
