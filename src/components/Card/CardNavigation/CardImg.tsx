import React from 'react';

const CardIcon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <img {...props} style={{ width: '50px', height: '50px' }} alt="" />;
};

export default CardIcon;