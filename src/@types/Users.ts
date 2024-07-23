export interface CardUserContainerProps {
    id?: number;
    username: string;
    accessLevel: string;
    email?: string;
    phone?: string;
  }
  
export interface User {
    id?: number;
    username: string;
    name: string;
    role: string;
    email?: string;
    phone?: string;
    cnpj?: string;
  }
  