import styled from "styled-components";

const Logo = styled.img`
  width: 100px;
`;



export const LogoComponent: React.FC<{ src: string }> = ({ src }) => <Logo src={src} alt="Logo" />;