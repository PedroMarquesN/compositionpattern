import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Title, UserCard, UserCardContainer } from "../../styles";
import { User } from "../../../@types/Users";
import { ImageUser, PerfilImg } from "../../../components/Card/CardUser/style";
import ImageUserAsset from "../../../assets/Vector.png";
import Button from "../../../components/Button/Button";
import { EditIcon } from "../../../assets/icons";

const API_URL = "http://localhost:8080/api/users";

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Title>Listagem de usuários</Title>
      <UserCardContainer>
        {users.map((user) => (
          <UserCard key={user.id}>
            <PerfilImg bgColor="#97B43C">
              <ImageUser src={ImageUserAsset} alt="Perfil" />
            </PerfilImg>
            <div>
              <h3>Usuário:</h3>
              <p>{user.username}</p>
              <h3>Email:</h3>
              <p> {user.email}</p>
            </div>
            <div>
              <h3>Telefone:</h3>
              <p>{user.phone}</p>
              <h3>Perfil de acesso</h3>
              <p>{user.role}</p>
            </div>
            <Button>
              <EditIcon />
            </Button>
          </UserCard>
        ))}
      </UserCardContainer>
    </Container>
  );
};

export default UsersList;
