import React, { FC } from "react";
import { CardUser, DataUser, DataUserContainer, ImageUser, PerfilImg } from "./style";
import ImageUserAsset from "../../../assets/Vector.png";

interface CardUserContainerProps {
  username: string;
  accessLevel: string;
}

const CardUserContainer: FC<CardUserContainerProps> = ({ username, accessLevel }) => {
  return (
    <CardUser>
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
    </CardUser>
  );
};

export default CardUserContainer;