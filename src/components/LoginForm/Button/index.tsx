import { FC } from "react";
import { ButtonFormProps } from "../../../@types/LoginForm";
import { StyledButtonForm } from "../styles";

const ButtonForm: FC<ButtonFormProps> = ({type, children}) => {

    return (
        <StyledButtonForm type={type}>{children}</StyledButtonForm>

    )
}

export default ButtonForm