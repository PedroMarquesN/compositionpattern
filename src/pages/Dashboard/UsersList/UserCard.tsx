import React, { useState } from "react";
import { UserCardStyles} from "../../styles";
import UserIcon, { EditIcon } from "../../../assets/icons";
import { ImageUser, PerfilImg } from "../../../components/Card/CardUser/style";
import Button from "../../../components/Button/Button";
import ImageUserAsset from "../../../assets/Vector.png";
import { UserInfo1 } from "./UserInfo";
import { User } from "../../../@types/Users";

import EditUserModal from "./EditUserModal";



const UserCard1 = ({ user }: { user: User }) => {
  const [selected, setSelected] = useState(false);

  const handleOpen = () => setSelected(true);
  const handleClose = () => setSelected(false);

  return (
    <>
      <UserCardStyles selected={selected}>
      <PerfilImg bgColor="#97B43C" selected={selected}>
          <UserIcon color={selected ? "#C4C4C4" : "#fff"} />
        </PerfilImg>
        <div>
          <UserInfo1 label="Usuário" selected={selected} value={user.username || "N/A"} />
          <UserInfo1 label="Email" selected={selected} value={user.email || "N/A"} />
        </div>
        <div>
          <UserInfo1 label="Telefone" selected={selected} value={user.phone || "N/A"} />
          <UserInfo1 label="Perfil de acesso" selected={selected} value={user.role || "N/A"} />
        </div>
        <Button onClick={handleOpen}>
          <EditIcon />
        </Button>
      </UserCardStyles>
      <EditUserModal open={selected} onClose={handleClose} />
    </>
  );
};
export default UserCard1;
