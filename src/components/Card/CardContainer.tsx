import styled from 'styled-components';
import CountCard from './CountCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 5rem;
  margin-right: 100px;
  width: 100%;

  @media(max-width: 490px){
    margin-right: 35rem;
  }

  @media (min-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
  
`;

const StyledCountCard = styled(CountCard)`
  width: 100%;


`;

const CardContainer: React.FC = () => {
  return (
    <Container>
      <StyledCountCard name='Habilidades:' value={30} /> 
      <StyledCountCard name='Estress:' value={17} /> 
      <StyledCountCard name='Felicidade:' value={90} /> 
    </Container>
  );
};

export default CardContainer;