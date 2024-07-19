import { UserCardStyles } from "../../styles";
import { EditIcon } from "../../../assets/icons";
import { ImageUser, PerfilImg } from "../../../components/Card/CardUser/style";
import Button from "../../../components/Button/Button";
import ImageUserAsset from "../../../assets/Vector.png";
import { UserInfo1 } from "./UserInfo";
import { User } from "../../../@types/Users";

const UserCard1 = ({ user }: { user: User }) => (
  <UserCardStyles>
    <PerfilImg bgColor="#97B43C">
      <ImageUser src={ImageUserAsset} alt="Perfil" />
    </PerfilImg>
    <div>
      <UserInfo1 label="Usuário" value={user.username || "N/A"} />
      <UserInfo1 label="Email" value={user.email || "N/A"} />
    </div>
    <div>
      <UserInfo1 label="Telefone" value={user.phone || "N/A"} />
      <UserInfo1 label="Perfil de acesso" value={user.role || "N/A"} />
    </div>
    <Button>
      <EditIcon />
    </Button>
  </UserCardStyles>
);

export default UserCard1;
