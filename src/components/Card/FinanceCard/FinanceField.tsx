import React from 'react';
import { FinanceInput, FinanceLabel } from './style';

interface FinanceFieldProps {
  label: string;
  placeholder: string;
}

const FinanceField: React.FC<FinanceFieldProps> = ({ label, placeholder }) => (
  <>
    <FinanceLabel>{label}</FinanceLabel>
    <FinanceInput type="text" placeholder={placeholder} />
  </>
);

export default FinanceField;