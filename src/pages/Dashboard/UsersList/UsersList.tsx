import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Title, UserCardContainer } from "../../styles";
import { User } from "../../../@types/Users";
import UserCard1 from "./UserCard";

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
        <UserCard1 key={user.id} user={user}  />
        ))}
      </UserCardContainer>
    </Container>
  );
};



export default UsersList;
