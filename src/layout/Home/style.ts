import styled from "styled-components";
import { ContainerProps } from "../../@types/Home";

export const Container = styled.div<ContainerProps>`
  transition: margin-left 0.3s ease;
  font-size: 2rem;
  margin-left: ${({ open }) => (open ? '250px' : '50px')};

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.5rem;
  }
`;