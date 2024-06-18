import { FC } from "react";
import { CardNavigation, DivIcons, IconAndLabel } from "./style";
import Icon1 from "../../../assets/icon1.png";
import Icon2 from "../../../assets/icon2.png";
import Icon3 from "../../../assets/icon3.png";

interface CardNavigationProps {
  title?: string;
  link?: string;
}

export const CardNavigationContainer: FC<CardNavigationProps> = () => {
  return (
    <CardNavigation>
      <IconAndLabel>
        <DivIcons>
          <img
            src={Icon1}
            alt="Icon 1"
            style={{ width: "50px", height: "50px" }}
          />
        </DivIcons>
        <p>Agendamento</p>
      </IconAndLabel>
      <IconAndLabel>
        <DivIcons>
          <img
            src={Icon2}
            alt="Icon 2"
            style={{ width: "50px", height: "50px" }}
          />
        </DivIcons>
        <p>Consultas</p>
      </IconAndLabel>
      <IconAndLabel>
        <DivIcons>
          <img
            src={Icon3}
            alt="Icon 3"
            style={{ width: "50px", height: "50px" }}
          />
        </DivIcons>
        <p>Exames</p>
      </IconAndLabel>
    </CardNavigation>
  );
};
