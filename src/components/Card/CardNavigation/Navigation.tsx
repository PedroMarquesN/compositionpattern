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
import { Link } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";


export const CardNavigationContainer: FC<CardNavigationProps> = ({routes}) => {
  return (
    <CardContainer height="16.6rem">
    <CardWrapper>
    {
          routes?.map((r, index) => ( 
            <IconWrapper key={index}> 
              <DivIcons>
                <Link
                  to={r.route}
                >
                  <CardIcon src={r.icon} alt={r.route} />
                </Link>
              </DivIcons>
              <CardText text={r.title} />
            </IconWrapper>
          ))
        }
    </CardWrapper>
    </CardContainer>
  );
};
