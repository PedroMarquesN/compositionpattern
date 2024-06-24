import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: auto auto; 
  grid-gap: 1.25rem; 
  padding: 3.25rem;

  /* Define áreas de grade */
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