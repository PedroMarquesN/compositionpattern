import React from "react";
import { WidthProvider, Responsive, Layout } from "react-grid-layout";
import { Container } from "./styles";
import { CardNavigationContainer } from "./CardNavigation/Navigation";
import CardUserContainer from "./CardUser/CardUser";
import FinanceCard from "./FinanceCard/FinanceCard";
import VolumeCenterContainer from "./VolumeCenters/VolumeCenterContainer";
import { TableContainer } from "./Table/TableContainer";
import CardLicense from "./LicenseTecno/CardLicense";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Card, RouteType } from "../../@types/Card";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import CardContainer from "./CardContainer/CardContainer";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout: Layout[] = [
  { i: "navigation", x: 0, y: 0, w: 3, h: 2, static: true },
  { i: "user", x: 3, y: 0, w: 1, h: 2, static: true },
  { i: "volume", x: 0, y: 2, w: 3, h: 3 },
  { i: "finance", x: 3, y: 2, w: 1, h: 3 },
  { i: "table", x: 0, y: 4, w: 3, h: 3 },
  { i: "license", x: 3, y: 4, w: 1, h: 3 },
];




const ContentContainer: React.FC = () => {

  let finantialCard:Card = {id: "finance", content: <FinanceCard /> };
  let centerCard:Card = {id: "volume", content: <VolumeCenterContainer /> };
  let tableCard:Card = {id: "table", content: <TableContainer /> };
  let technologyLicenseCard:Card = {id: "license", content: <CardLicense /> };


  let adminCards:Card[] = [finantialCard, centerCard, tableCard, technologyLicenseCard];
  let clientCards:Card[] = [finantialCard, tableCard, technologyLicenseCard];
  let courierCards:Card[] = [tableCard];
  let operatorCards:Card[] = [finantialCard, centerCard];

  let routeScheduling: RouteType = {title: "Agendamento", icon: Icon1, route: '/agendamento'};
  let routeDismemberment: RouteType = {title: "Desmembramento", icon: Icon3, route: '/desmembramento'};
  let adminRoute: RouteType = {title: "Configuração", icon: Icon2, route: '/admin'};

  let administratorRoutes: RouteType[] = [routeScheduling, adminRoute, routeDismemberment];
  let operatorRoutes: RouteType[] = [routeDismemberment, routeScheduling];
  let courierRoutes: RouteType[] = [routeScheduling];


  return (
    <Container>
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 4, md: 2, sm: 1, xs: 1, xxs: 1 }}
      rowHeight={100}
      width={1200}
      isDraggable
      isResizable
      
    >
      <div key="navigation">
        <CardNavigationContainer routes={administratorRoutes} />
      </div>
      <div key="user">
        <CardUserContainer username="MarquesDev" accessLevel="Administrador" />
      </div>
      {
        adminCards.map(c => {
          return (
            <div key={c.id}>
              <CardContainer>
                {c.content}
              </CardContainer>
            </div>
          )
        })
      }
    </ResponsiveGridLayout>
  </Container>
  );
};

export default ContentContainer;
