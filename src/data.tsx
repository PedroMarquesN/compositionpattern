import Icon1 from "./assets/icon1.png";
import Icon2 from "./assets/icon2.png";
import Icon3 from "./assets/icon3.png";
import { Card, RouteType } from "./@types/Card";
import FinanceCard from "./components/Card/FinanceCard/FinanceCard";
import CardLicense from "./components/Card/LicenseTecno/CardLicense";
import { TableContainer } from "./components/Card/Table/TableContainer";
import VolumeCenterContainer from "./components/Card/VolumeCenters/VolumeCenterContainer";

export const adminCards: Card[] = [
  { id: "finance", content: <FinanceCard /> },
  { id: "volume", content: <VolumeCenterContainer /> },
  { id: "table", content: <TableContainer /> },
  { id: "license", content: <CardLicense /> },
];

export const clientCards: Card[] = [
  { id: "finance", content: <FinanceCard /> },
  { id: "table", content: <TableContainer /> },
  { id: "license", content: <CardLicense /> },
];

export const courierCards: Card[] = [{ id: "table", content: <TableContainer /> }];

export const operatorCards: Card[] = [
  { id: "finance", content: <FinanceCard /> },
  { id: "volume", content: <VolumeCenterContainer /> },
];

export const routeScheduling: RouteType = {
  title: "Agendamento",
  icon: Icon1,
  route: "/agendamento",
};
export const routeDismemberment: RouteType = {
  title: "Desmembramento",
  icon: Icon3,
  route: "/desmembramento",
};
export const adminRoute: RouteType = {
  title: "Configuração",
  icon: Icon2,
  route: "/admin",
};

export const administratorRoutes: RouteType[] = [
  routeScheduling,
  adminRoute,
  routeDismemberment,
];
export const clientRoutes: RouteType[] = [routeScheduling];
export const operatorRoutes: RouteType[] = [routeDismemberment, routeScheduling];
export const courierRoutes: RouteType[] = [routeScheduling];

export function getCardsAndRoutes(userRole: string) {
  switch (userRole) {
    case "Admin":
      return { cards: adminCards, routes: administratorRoutes };
    case "Client":
      return { cards: clientCards, routes: clientRoutes };
    case "User":
      return { cards: courierCards, routes: courierRoutes };
    case "Viewer":
      return { cards: operatorCards, routes: operatorRoutes };
    default:
      return { cards: [], routes: [] };
  }
}
