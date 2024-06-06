import { FC } from 'react';
import { ContainerProps } from '../../@types/Home';
import { Container } from './style';



const ContentContainer: FC<ContainerProps> = ({open}) => {
  return (
    <Container open={open}>
      <h1>Hello World</h1>
    </Container>
  );
};

export default ContentContainer;