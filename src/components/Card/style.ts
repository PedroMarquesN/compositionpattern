import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  width: 250px;
  height: 250px;
  background: #636262;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Ball = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  margin: 20px 0;
  position: relative;
`;

export const Name = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowUpIcon = styled(FiArrowUp)`
  color: green;
  font-size: 2.5rem;
  position: absolute;
  bottom: -30px;
`;

export const ArrowDownIcon = styled(FiArrowDown)`
  color: red;
  font-size: 2.5rem;
  position: absolute;
  bottom: -30px;
`;