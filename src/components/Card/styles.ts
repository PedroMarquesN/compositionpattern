import styled from "styled-components";

interface StyledCardProps {
    width?: string;
    height?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
    display: flex;
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

  
  grid-template-areas:
    "cardNavigation cardUser"
    "volumeCenter financeCard";
`;

export const CardNavigationArea = styled.div`
  grid-area: cardNavigation; 
`;

export const CardUserArea = styled.div`
  grid-area: cardUser; 
`;

export const VolumeCenterArea = styled.div`
  grid-area: volumeCenter; 
`;

export const FinanceCardArea = styled.div`
  grid-area: financeCard; 
  height: 100%; 
`;