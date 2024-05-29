import React from 'react';
import { Tooltip } from './Styles';

const ButtonTooltip: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Tooltip>{children}</Tooltip>;
};

export default ButtonTooltip;