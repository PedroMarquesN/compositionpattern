import styled from 'styled-components';


export const LogoNav = styled.img`
  margin-left: 1rem;
  max-width: 130px;
  z-index: 99999999;
`;


export const NavbarContainer = styled.nav`
  background: linear-gradient(90deg, #97B43C 0%, #414E1A 100%);
  color: #fff;
  display: flex;
  padding-right: 1rem;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%; 
  @media(min-width: 768px){
    justify-content: space-around;
  }
  @media(min-width: 1024px){ 
    justify-content: space-between;
  }
`;



export const Logo = styled.img`
  width: 30%; 
  margin: 0 auto;
`;
export const ProfileIcon = styled.img`
  width: 80px;
  height: 40px;
  background-color: red;
  border-radius: 50%;
`;

export const Dropdown = styled.div`
`;
