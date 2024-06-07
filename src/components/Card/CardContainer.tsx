import React from 'react';
import styled from 'styled-components';
import CountCard from './CountCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 50px;
  
  @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    
}

`;

const CardContainer: React.FC = () => {
  return (
    <Container>
      <CountCard name='Habilidades:' value={30} />
      <CountCard name='Estress:' value={60} />
      <CountCard name='Felicidade:'value={90} />
    </Container>
  );
};

export default CardContainer;