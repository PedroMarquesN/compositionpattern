import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, UserCard, UserCardContainer } from "./styles";
import { User } from "../@types/Users";

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
      <UserCardContainer>
        {users.map((user) => (
          <UserCard key={user.id}>
            <h3>{user.username}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Role: {user.role}</p>
          </UserCard>
        ))}
      </UserCardContainer>
    </Container>
  );
};

export default UsersList;
