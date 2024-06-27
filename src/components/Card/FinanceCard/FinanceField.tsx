import React from 'react';
import { FinanceInput, FinanceLabel } from './style';
import { FinanceFieldProps } from '../../../@types/Finance';

const FinanceField: React.FC<FinanceFieldProps> = ({ label, placeholder }) => (
  <>
    <FinanceLabel>{label}</FinanceLabel>
    <FinanceInput type="text" placeholder={placeholder} />
  </>
);

export default FinanceField;