import React, { useEffect, useState } from "react";
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
import { Card, RouteType, UserRole } from "../../@types/Card";
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
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const role = localStorage.getItem("role") as UserRole | null;;
    const username = localStorage.getItem("username") || '';
    setUserName(username);
    setUserRole(role);
  }, []);

  if (!userRole) {
    return null; 
  }

  let adminCards: Card[] = [
    { id: "finance", content: <FinanceCard /> },
    { id: "volume", content: <VolumeCenterContainer /> },
    { id: "table", content: <TableContainer /> },
    { id: "license", content: <CardLicense /> },
  ];

  let clientCards: Card[] = [
    { id: "finance", content: <FinanceCard /> },
    { id: "table", content: <TableContainer /> },
    { id: "license", content: <CardLicense /> },
  ];

  let courierCards: Card[] = [{ id: "table", content: <TableContainer /> }];

  let operatorCards: Card[] = [
    { id: "finance", content: <FinanceCard /> },
    { id: "volume", content: <VolumeCenterContainer /> },
  ];

  let routeScheduling: RouteType = {
    title: "Agendamento",
    icon: Icon1,
    route: "/agendamento",
  };
  let routeDismemberment: RouteType = {
    title: "Desmembramento",
    icon: Icon3,
    route: "/desmembramento",
  };
  let adminRoute: RouteType = {
    title: "Configuração",
    icon: Icon2,
    route: "/admin",
  };

  let administratorRoutes: RouteType[] = [
    routeScheduling,
    adminRoute,
    routeDismemberment,
  ];
  let clientRoutes: RouteType[] = [routeScheduling];
  let operatorRoutes: RouteType[] = [routeDismemberment, routeScheduling];
  let courierRoutes: RouteType[] = [routeScheduling];

  let cardsToRender: Card[] = [];
  let routesToRender: RouteType[] = [];

  switch (userRole) {
    case "Admin":
      cardsToRender = adminCards;
      routesToRender = administratorRoutes;
      break;
    case "Client":
      cardsToRender = clientCards;
      routesToRender = clientRoutes;
      break;
    case "User":
      cardsToRender = courierCards;
      routesToRender = courierRoutes;
      break;
    case "Viewer":
      cardsToRender = operatorCards;
      routesToRender = operatorRoutes;
      break;
    default:
      cardsToRender = [];
      routesToRender = [];
      break;
  }

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
          <CardNavigationContainer routes={routesToRender} />
        </div>
        <div key="user">
          <CardUserContainer username={userName} accessLevel={userRole} />
        </div>
        {cardsToRender.map((c) => (
          <div key={c.id}>
            <CardContainer>{c.content}</CardContainer>
          </div>
        ))}
      </ResponsiveGridLayout>
    </Container>
  );
};

export default ContentContainer;
