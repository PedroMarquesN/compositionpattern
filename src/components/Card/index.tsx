import { FC } from "react";
import { CardNavigationArea, CardUserArea, Container, FinanceCardArea, VolumeCenterArea } from "./styles";
import { CardNavigationContainer } from "./CardNavigation/Navigation";
import CardUserContainer from "./CardUser/CardUser";
import FinanceCard from "./FinanceCard/FinanceCard";
import VolumeCenterContainer from "./VolumeCenters/VolumeCenterContainer"; 



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