import styled from "styled-components";

const Logo = styled.img`
  width: 100px;
  z-index: 99999999;
`;



export const LogoComponent: React.FC<{ src: string }> = ({ src }) => <Logo src={src} alt="Logo" />;