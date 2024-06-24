import { FC } from "react";
import { DivIcons } from "./style";
import Icon1 from "../../../assets/icon1.png";
import Icon2 from "../../../assets/icon2.png";
import Icon3 from "../../../assets/icon3.png";
import CardWrapper from "../CardContainer";
import IconWrapper from "./IconContainer";
import CardIcon from "./CardImg";
import CardText from "./CardText";

interface CardNavigationProps {
  title?: string;
  link?: string;
}

export const CardNavigationContainer: FC<CardNavigationProps> = () => {
  return (
    <CardWrapper width="94.1rem" height="16.1rem">
      <IconWrapper>
        <DivIcons>
        <CardIcon src={Icon1} alt="icon1" />
        </DivIcons>
        <CardText text="Agendamento" />
      </IconWrapper>
      <IconWrapper>
        <DivIcons>
        <CardIcon src={Icon2} alt="icon2" />
        </DivIcons>
        <CardText text="Consulta" />
      </IconWrapper>
      <IconWrapper>
        <DivIcons>
        <CardIcon src={Icon3} alt="icon3" />
        </DivIcons>
        <CardText text="Exames" />
      </IconWrapper>
    </CardWrapper>
  );
};
