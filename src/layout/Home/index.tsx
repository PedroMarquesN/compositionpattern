import { FC } from 'react';
import { Container, CardNavigationArea, CardUserArea, VolumeCenterArea, FinanceCardArea } from './style';

import { CardNavigationContainer } from '../../components/Card/CardNavigation/Navigation';
import CardUserContainer from '../../components/Card/CardUser/CardUser';
import VolumeCenterContainer from '../../components/Card/VolumeCenters/VolumeCenterContainer';
import FinanceCard from '../../components/Card/FinanceCard/FinanceCard';

const ContentContainer: FC = () => {
  return (
    <Container>
      <CardNavigationArea>
        <CardNavigationContainer />
      </CardNavigationArea>
      <CardUserArea>
        <CardUserContainer username="MarquesDev" accessLevel="Administrador" />
      </CardUserArea>
      <VolumeCenterArea>
        <VolumeCenterContainer />
      </VolumeCenterArea>
      <FinanceCardArea>
        <FinanceCard />
      </FinanceCardArea>
    </Container>
  );
};

export default ContentContainer;
