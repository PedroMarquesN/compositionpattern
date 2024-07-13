import { FC } from "react";
import { ButtonFormProps } from "../../../@types/LoginForm";
import { StyledButtonForm } from "../styles";

const ButtonForm: FC<ButtonFormProps> = ({type, children, onClick}) => {

    return (
        <StyledButtonForm type={type} onClick={onClick}>{children}</StyledButtonForm>

    )
}

export default ButtonForm