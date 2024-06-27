import React, { FC } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { ButtonTable } from './styles';

interface ButtonWrapperProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

const ButtonWrapper: FC<ButtonWrapperProps> = ({ icon , children }) => {
  return (
    <ButtonTable>
      {icon}
      {children}
    </ButtonTable>
  );
};

export default ButtonWrapper;
