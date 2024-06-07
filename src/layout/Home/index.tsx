import { FC } from 'react';
import { ContainerProps } from '../../@types/Home';
import { Container } from './style';
import CardContainer from '../../components/Card/CardContainer';



const ContentContainer: FC<ContainerProps> = ({open}) => {
  return (
    <Container open={open}>
      <h1>Hello World</h1>
      <CardContainer />
    </Container>
  );
};

export default ContentContainer;