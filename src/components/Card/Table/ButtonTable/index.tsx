import React, { FC } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { ButtonTable } from './styles';

interface ButtonWrapperProps extends React.HTMLAttributes<HTMLButtonElement>{
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const ButtonWrapper:FC = () => {
  return (
        <ButtonTable >
            <FaRegTrashAlt />
            Eliminar Agendamento
        </ButtonTable>
  )
}

export default ButtonWrapper
