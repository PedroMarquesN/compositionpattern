import styled from "styled-components";

interface StyledCardProps {
    width?: string;
    height?: string;
    enableOverflow?: boolean
}

export const StyledCard = styled.div<StyledCardProps>`
    display: flex;
    ${({ enableOverflow }) => enableOverflow && 'overflow-x: auto;'}
    flex-wrap: wrap;
    align-items: center;
    gap: ${({ theme }) => theme.space[9]};
    padding: ${({ theme }) => theme.space[9]};
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;




export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: auto auto; 
  grid-gap: 1.25rem; 
  padding: 3.25rem;

`;

