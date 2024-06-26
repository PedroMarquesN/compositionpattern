import React, { FC } from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { ContractCard, ContractTable, ContractTitle } from './style';


const ContractContainer: FC = () => {
  return (
    <ContractCard>
        <ContractTitle>Contrato</ContractTitle>
        <IoDocumentTextOutline size={24}/>
            <ContractTable>
                <thead>
                    <tr>
                        <td>CNPJ</td>
                        <td>Tecnologia</td>
                    </tr>        
                </thead>
                <tbody>
                    <tr>
                        <td>00.000.000/0000-00</td>
                        <td>Nome da Tecnologia</td>
                    </tr>
                    <tr>
                        <td>00.000.000/0000-00</td>
                        <td>Nome da Tecnologia</td>
                    </tr>
                </tbody>
            </ContractTable>
    </ContractCard>
  )
}

export default ContractContainer