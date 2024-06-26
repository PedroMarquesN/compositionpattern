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

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout: Layout[] = [
  { i: "navigation", x: 0, y: 0, w: 3, h: 2, static: true },
  { i: "user", x: 3, y: 0, w: 1, h: 2, static: true },
  { i: "volume", x: 0, y: 2, w: 3, h: 2 },
  { i: "finance", x: 3, y: 2, w: 1, h: 2 },
  { i: "table", x: 0, y: 4, w: 3, h: 4 },
  { i: "license", x: 3, y: 4, w: 1, h: 2 },
];

const ContentContainer: React.FC = () => {
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
      <div key="navigation"><CardNavigationContainer /></div>
      <div key="user"><CardUserContainer username="MarquesDev" accessLevel="Administrador" /></div>
      <div key="volume"><VolumeCenterContainer /></div>
      <div key="finance"><FinanceCard /></div>
      <div key="table"><TableContainer /></div>
      <div key="license"><CardLicense /></div>
    </ResponsiveGridLayout>
  </Container>
  );
};

export default ContentContainer;
