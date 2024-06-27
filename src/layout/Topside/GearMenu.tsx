import { LogoNav } from "./style";




export const LogoComponent: React.FC<{ src: string }> = ({ src }) => <LogoNav src={src} alt="Logo" />;