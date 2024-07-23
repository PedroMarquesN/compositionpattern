import React, { useState } from "react";
import { UserCardStyles } from "../../styles";
import UserIcon, { EditIcon, ContractIcon } from "../../../assets/icons";
import { PerfilImg } from "../../../components/Card/CardUser/style";
import Button from "../../../components/Button/Button";
import { UserInfo1 } from "./UserInfo";
import { User } from "../../../@types/Users";
import EditUserModal from "./EditUserModal";
import EditContractModal from "./EditContractModal"; // Certifique-se de importar seu novo modal
import { updateUser } from "../../../api/userService";
import { getContractsByClientId } from "../../../api/contractService";


const UserCard1 = ({ user }: { user: User }) => {
  const [selected, setSelected] = useState(false);
  const [isContractsModalOpen, setIsContractsModalOpen] = useState(false);
  const [contracts, setContracts] = useState([]);

  const handleOpen = () => setSelected(true);
  const handleClose = () => setSelected(false);

  const handleSubmit = async (data: User) => {
    if (user.id)
      try {
        const response = await updateUser(user.id, data);
        
        handleClose();
      } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
      }
  };

  const toggleContractsModal = async () => {
    if (!isContractsModalOpen) {
      try {
        const response = await getContractsByClientId(user.id?.toString() ?? "");
        setContracts(response.data);
      } catch (error) {
        console.error("Erro ao obter contratos:", error);
      }
    }
    setIsContractsModalOpen(!isContractsModalOpen);
  };

  return (
    <>
      <UserCardStyles selected={selected}>
        <PerfilImg bgColor="#97B43C" selected={selected}>
          <UserIcon color={selected ? "#C4C4C4" : "#fff"} />
        </PerfilImg>
        <div>
          <UserInfo1 label="Usuário" selected={selected} value={user.name || "N/A"} />
          <UserInfo1 label="Email" selected={selected} value={user.email || "N/A"} />
        </div>
        <div>
          <UserInfo1 label="Telefone" selected={selected} value={user.phone || "N/A"} />
          <UserInfo1 label="Perfil de acesso" selected={selected} value={user.role || "N/A"} />
        </div>
        <Button  top="10px" right="10px" onClick={handleOpen} selected={selected}>
          <EditIcon color={selected ? "#97B43C" : "#fff"} />
        </Button>
        <Button top="70px" right="10px" width="42px" onClick={toggleContractsModal} selected={selected}>
          <ContractIcon color={selected ? "#97B43C" : "#fff"} />
        </Button>
      </UserCardStyles>
      <EditUserModal open={selected} onClose={handleClose} onSubmit={handleSubmit} user={user} />
      <EditContractModal open={isContractsModalOpen} onClose={toggleContractsModal} contracts={contracts} />
    </>
  );
};

export default UserCard1;
