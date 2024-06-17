import { ReactNode } from "react";

export interface AuthContextProps {
    isAuthenticate: boolean
    login: (username:string, password:string) => void ;
    logout: () => void
}

export interface AuthProviderProps {
    children: ReactNode
}