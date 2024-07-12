import { FC } from "react";
import { DivIcons } from "./style";
import Icon1 from "../../../assets/icon1.png";
import Icon2 from "../../../assets/icon2.png";
import Icon3 from "../../../assets/icon3.png";
import CardWrapper from "../CardContainer";
import IconWrapper from "./IconContainer";
import CardIcon from "./CardImg";
import CardText from "./CardText";
import CardContainer from "../CardContainer/CardContainer";
import { CardNavigationProps } from "../../../@types/Card";


export const CardNavigationContainer: FC<CardNavigationProps> = ({routes}) => {
  return (
    <CardContainer height="16.6rem">
    <CardWrapper>
      {
        routes?.map(r => {
          return (
            <IconWrapper>
              <DivIcons>
              <CardIcon src={r.icon} alt={r.route} />
              </DivIcons>
              <CardText text={r.title} />
            </IconWrapper>
          );
      })
      }
    </CardWrapper>
    </CardContainer>
  );
};
