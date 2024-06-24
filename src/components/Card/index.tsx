import { FC } from "react";
import { Container } from "./styles";
import { CardNavigationContainer } from "./CardNavigation/Navigation";
import CardUserContainer from "./CardUser/CardUser";
import FinanceCard from "./FinanceCard/FinanceCard";
import VolumeCenterContainer from "./VolumeCenters/VolumeCenterContainer";
import { TableContainer } from "./Table/TableContainer";
import CardLicense from "./LicenseTecno/CardLicense";

const ContentContainer: FC = () => {
  return (
    <Container>
      <CardNavigationContainer />
      <CardUserContainer username="MarquesDev" accessLevel="Administrador" />
      <VolumeCenterContainer />
      <FinanceCard />
      <TableContainer />
      <CardLicense />
    </Container>
  );
};
export default ContentContainer;
