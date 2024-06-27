import React, { FC } from 'react'
import CardWrapper from '../CardContainer'
import { MdOutlineComputer } from "react-icons/md";
import { FinanceH3, IconFinance } from '../FinanceCard/style';
import CardContainer from '../CardContainer/CardContainer';
import ContractContainer from './Contract';

const contractsExample = [
  { cnpj: '12.345.678/0001-99',technology: 'Tecnologia A'},
  { cnpj: '98.765.432/0001-11', technology: 'Tecnologia B' }
];

const CardLicense: FC = () => {
  return (
    <CardContainer  height='32rem'>
      <IconFinance>
      <MdOutlineComputer  fill='#fff' size={36} />
      </IconFinance>
      <FinanceH3>Licenciamento Tecnológia</FinanceH3>
      <ContractContainer  contracts={contractsExample}/>
      </CardContainer>
  )
}

export default CardLicense