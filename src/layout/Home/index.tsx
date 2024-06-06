import styled from 'styled-components';
import { FC } from 'react';

interface ContainerProps {
  open: boolean;
}

const Container = styled.div<ContainerProps>`
  transition: margin-left 0.3s ease;
  margin-left: ${({ open }) => (open ? '250px' : '50px')};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
const ContentContainer: FC<ContainerProps> = ({open}) => {
  return (
    <Container open={open}>
      <h1>Wello WOrdlslslslss</h1>
    </Container>
  );
};

export default ContentContainer;