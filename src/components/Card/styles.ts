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
    height: ${(props) => props.height || "100%"};
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;



export const Container = styled.div`

  .react-grid-placeholder {
    background: transparent;
    border : 2px dashed black;
  }
  
  padding: 1rem;
  height: 100%;
  width: 100vw;
  overflow: hidden;
`;

export const StyledCardContainer = styled.div<StyledCardProps>`
  overflow: auto;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;
`;


export const StyledH1 = styled.h1`
    padding: 1rem ;
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text1};
`;