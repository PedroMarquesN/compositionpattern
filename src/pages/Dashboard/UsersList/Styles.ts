import styled from "styled-components";
import Box from '@mui/material/Box';

export const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 24px 24px 24px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;