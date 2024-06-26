import React from "react";
import { FinanceCardContainer, FinanceH3, IconFinance } from "./style";
import { CiCreditCard1 } from "react-icons/ci";
import FinanceField from "./FinanceField";
import CardContainer from "../CardContainer/CardContainer";

const FinanceCard: React.FC = () => {
  return (
    <CardContainer height='32rem'>
      <FinanceCardContainer>
        <IconFinance>
          <CiCreditCard1 fill="white" size={48} />
        </IconFinance>
        <FinanceH3>Dados Financeiros</FinanceH3>
        <FinanceField label="Limite de credito" placeholder="R$ 0,00" />
        <FinanceField label="Adiantamento" placeholder="R$ 0,00" />
        <FinanceField label="Total em Garantia" placeholder="R$ 0,00" />
      </FinanceCardContainer>
    </CardContainer>
  );
};

export default FinanceCard;
