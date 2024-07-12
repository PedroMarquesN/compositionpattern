import React, { FC } from "react";
import { CardUser, DataUser, DataUserContainer, ImageUser, PerfilImg } from "./style";
import ImageUserAsset from "../../../assets/Vector.png";
import CardWrapper from "../CardContainer";
import { CardUserContainerProps } from "../../../@types/Users";
import CardContainer from "../CardContainer/CardContainer";


const CardUserContainer: FC<CardUserContainerProps> = ({ username, accessLevel }) => {
  return (
    <CardContainer height="16.6rem">
    <CardWrapper >
      <PerfilImg>
        <ImageUser src={ImageUserAsset} alt="Perfil" />
      </PerfilImg>
      <DataUserContainer>
        <DataUser>
          <label>Usuário:</label>
          <p>{username}</p>
        </DataUser>
        <DataUser>
          <label>Perfil de Acesso:</label>
          <p>{accessLevel}</p>
        </DataUser>
      </DataUserContainer>
    </CardWrapper>
    </CardContainer>
  );
};

export default CardUserContainer;