import { FC } from 'react';
import { ContainerProps } from '../../@types/Home';
import { Container } from './style';

import { CardNavigationContainer } from '../../components/Card/CardNavigation/Navigation';
import CardUserContainer from '../../components/Card/CardUser/CardUser';
import VolumeCenterContainer from '../../components/Card/VolumeCenters/VolumeCenterContainer';




const ContentContainer: FC<ContainerProps> = ({open}) => {
  return (
    <Container open={open}>
      <CardNavigationContainer />
      <CardUserContainer username="MarquesDev" accessLevel="Administrador" />
      <VolumeCenterContainer  />
    </Container>
  );
};

export default ContentContainer;