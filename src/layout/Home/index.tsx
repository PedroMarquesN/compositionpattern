import { FC } from 'react';
import { ContainerProps } from '../../@types/Home';
import { Container } from './style';

import { CardNavigationContainer } from '../../components/Card/CardNavigation/Navigation';
import CardUserContainer from '../../components/Card/CardUser/CardUser';




const ContentContainer: FC<ContainerProps> = ({open}) => {
  return (
    <Container open={open}>
      <CardNavigationContainer />
      <CardUserContainer /> 
    </Container>
  );
};

export default ContentContainer;