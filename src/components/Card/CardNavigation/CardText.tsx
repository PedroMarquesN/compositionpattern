import { FC } from "react";
import { StyledCardText } from "./style";

interface CardTextProps {
    text?: string;
}


const CardText: FC<CardTextProps> = ({ text }) => {
    return (
        <StyledCardText>{text}</StyledCardText>
    )
}


export default CardText;


// <CardWrapper width="94.1rem" height="16.1rem">
// <IconWrapper>
//   <CardIcon src={Icon1} alt="icon1" />
//   <CardText text="Agendamento" />
// </IconWrapper>
// </CardWrapper>