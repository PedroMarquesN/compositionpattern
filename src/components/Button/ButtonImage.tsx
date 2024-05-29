import React from 'react';
import { Image } from './Styles';

const ButtonImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <Image {...props} />;
};

export default ButtonImage;
