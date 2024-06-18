import styled from "styled-components";
import { ContainerProps } from "../../@types/Home";

export const Container = styled.div<ContainerProps>`
  transition: margin-left 0.3s ease;
  font-size: 2rem;
  color: ${({theme}) => theme.colors.secondary};
  margin-left: ${({ open }) => (open ? '250px' : '50px')};

  @media (max-width: 768px) {
    margin-left: 50px;
    font-size: 1.5rem;
  }
`;