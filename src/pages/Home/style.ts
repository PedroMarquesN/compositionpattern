import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Define duas colunas de igual largura */
  grid-template-rows: auto auto; /* Duas linhas automáticas */
  grid-gap: 1.25rem; /* Espaçamento entre os elementos */
  padding: 3.25rem;

  /* Define áreas de grade */
  grid-template-areas:
    "cardNavigation cardUser"
    "volumeCenter financeCard";
`;

export const CardNavigationArea = styled.div`
  grid-area: cardNavigation; /* Define a área da grade para este componente */
`;

export const CardUserArea = styled.div`
  grid-area: cardUser; /* Define a área da grade para este componente */
`;

export const VolumeCenterArea = styled.div`
  grid-area: volumeCenter; /* Define a área da grade para este componente */
`;

export const FinanceCardArea = styled.div`
  grid-area: financeCard; /* Define a área da grade para este componente */
  height: 100%; /* Certifique-se de que o componente ocupe toda a área */
`;