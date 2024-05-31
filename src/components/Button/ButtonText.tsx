import React, { FC } from 'react';
import { Text } from './Styles';
import { ButtonProps } from './Button';

const ButtonText: FC<ButtonProps>= ({ children , fontSize, fontFamily }) => {
  return <Text fontFamily={fontFamily} fontSize={fontSize}>{children}</Text>;
};

export default ButtonText;