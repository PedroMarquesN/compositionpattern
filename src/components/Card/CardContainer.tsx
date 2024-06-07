import styled from 'styled-components';
import CountCard from './CountCard';
import { Container, StyledCountCard } from './style';



const CardContainer: React.FC = () => {
  return (
    <Container>
      <StyledCountCard name='Habilidades:' value={30} animation='+' /> 
      <StyledCountCard name='Estress:' value={17} animation='+'/> 
      <StyledCountCard name='Felicidade:' value={90} animation='-'/> 
    </Container>
  );
};

export default CardContainer;