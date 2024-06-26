import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { ButtonTable } from './styles';

const ButtonWrapper = () => {
  return (
        <ButtonTable>
            <FaRegTrashAlt />
            Eliminar Agendamento
        </ButtonTable>
  )
}

export default ButtonWrapper
