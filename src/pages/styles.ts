import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const UserCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const UserCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin-top: 0;
  }
`;
