import React, { FC } from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { ContractCard, ContractTable, ContractTitle } from './style';
import { ContractCardProps } from '../../../@types/Contract';





const ContractContainer: FC<ContractCardProps> = ({contracts}) => {
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
                  {/* 3. Usar as Props no Componente */}
                  {contracts.map((contract, index) => (
                    <tr key={index}>
                        <td>{contract.cnpj}</td>
                        <td>{contract.technology}</td>
                    </tr>
                  ))}
                </tbody>
            </ContractTable>
    </ContractCard>
  )
}

export default ContractContainer