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