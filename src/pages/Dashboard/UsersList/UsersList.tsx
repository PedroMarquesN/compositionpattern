import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Title, UserCardContainer } from "../../styles";
import { User } from "../../../@types/Users";
import UserCard1 from "./UserCard";

const API_URL = "http://localhost:8080/api/users";

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        const fetchedUsers = response.data;

        if (Array.isArray(fetchedUsers)) {
          setUsers(fetchedUsers);
        } else {
          console.error("API response is not an array:", fetchedUsers);
          setError("Error fetching users");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Title>User Listing</Title>
      <UserCardContainer>
        {users.length > 0 ? (
          users.map((user) => <UserCard1 key={user.id} user={user} />)
        ) : (
          <div>No users found</div>
        )}
      </UserCardContainer>
    </Container>
  );
};



export default UsersList;
