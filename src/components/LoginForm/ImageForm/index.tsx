import { FC } from "react";
import { FormImg, ImageContainer } from "../styles";

const NewFormImg: FC = () => {
    return (
    <ImageContainer>
        <FormImg src='https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='imagem fazenda'/>
    </ImageContainer>
    )
}

export default NewFormImg