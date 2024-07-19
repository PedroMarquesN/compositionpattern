import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Title  = styled.h1`
  margin: 0 auto;
  font-weight: ${({ theme }) => theme.weight[7]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  margin-bottom: 20px;
`;

export interface UserCardStylesProps {
  selected: boolean;
}
export const UserCardStyles = styled.div<UserCardStylesProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${props => props.selected ? '#97B43C' : '#fff'};
  border-radius: 4px;
  border: 3px solid #97B43C;
  padding: 20px;
  width: 659px;
  height: 132px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
`;
export const Info = styled.div<UserCardStylesProps>`
  margin-bottom: 10px;

  h3 {
    font-size: 1rem;
    color: ${props => props.selected ? '#fff' : '#555'};
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    color: ${props => props.selected ? '#fff' : '#555'};
    margin: 0;
    margin-bottom: 5px;
  }
`;

