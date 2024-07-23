import styled from "styled-components";
import Box from '@mui/material/Box';

export const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border: 1px solid #97B43C;
  box-shadow: 24px 24px 24px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const ContractModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border: 1px solid #97B43C;
  box-shadow: 24px 24px 24px rgba(0, 0, 0, 0.2);
  padding: 20px;
  `


export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
`;