import React from 'react';
import { Text } from './Styles';

const ButtonText: React.FC< {children: React.ReactNode} > = ({ children }) => {
  return <Text>{children}</Text>;
};

export default ButtonText;