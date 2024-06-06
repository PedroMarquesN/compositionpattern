import styled from 'styled-components';
import { FC } from 'react';

interface ContainerProps {
}

const Container = styled.div<ContainerProps>`
  transition: margin-left 0.3s ease;
  margin-left: 250px;
`;

const ContentContainer: FC<ContainerProps> = () => {
  return (
    <Container>
      <h1>Wello WOrdlslslslss</h1>
    </Container>
  );
};

export default ContentContainer;