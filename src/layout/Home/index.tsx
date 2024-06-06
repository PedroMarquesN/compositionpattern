import styled from 'styled-components';
import { FC } from 'react';

interface ContainerProps {
}

const Container = styled.div<ContainerProps>`
  flex: 1;
  margin-top: 57px;
  transition: margin-left 0.3s ease;
  padding: ${({ theme }) => theme.space[4]};
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