import { FC } from 'react';
import { ContainerProps } from '../../@types/Home';
import { Container } from './style';
import { CardNavigationContainer } from '../../components/Card/Navigation';




const ContentContainer: FC<ContainerProps> = ({open}) => {
  return (
    <Container open={open}>
      <CardNavigationContainer />
    </Container>
  );
};

export default ContentContainer;