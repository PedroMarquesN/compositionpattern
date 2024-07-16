import React, { useEffect, useState } from "react";
import { WidthProvider, Responsive, Layout } from "react-grid-layout";
import { Container } from "./styles";
import { CardNavigationContainer } from "./CardNavigation/Navigation";
import CardUserContainer from "./CardUser/CardUser";
import CardContainer from "./CardContainer/CardContainer";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useUser } from "../../contexts/UserContext";
import { getCardsAndRoutes } from "../../data";

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
  const { userRole, userName, loading } = useUser();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsLoaded(true);
    }
  }, [loading]);

  if (loading || !isLoaded) {
    return <div>Loading...</div>;
  }

  const { cards, routes } = getCardsAndRoutes(userRole ?? "");

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
          <CardNavigationContainer routes={routes} />
        </div>
        <div key="user">
          <CardUserContainer username={userName} accessLevel={userRole ?? ""} />
        </div>
        {isLoaded ? (
          cards.map((c) => (
            <div key={c.id}>
              <CardContainer>{c.content}</CardContainer>
            </div>
          ))
        ) : (
          <div>Carregando...</div>
        )}
      </ResponsiveGridLayout>
    </Container>
  );
};

export default ContentContainer;
