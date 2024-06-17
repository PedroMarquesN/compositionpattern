import { createContext, FC, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { AuthContextProps, AuthProviderProps } from "../@types/AuthProvider";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticate");
    const cookieAuth = Cookies.get("isAuthenticate");

    if (storedAuth === "true" && cookieAuth === "true") {
      setIsAuthenticate(true);
    }
  }, []);



  const login = (username: string , password: string) => {
    if (username === 'user' && password === 'password') {
        setIsAuthenticate(true);
        localStorage.setItem("isAuthenticate", 'true')
        Cookies.set('isAuthenticate', 'true' , {expires: 1})
        navigate('/dashboard')           
    }else{
        alert('Credenciais Inválidas')
    }
  }


  const logout = () => {
    setIsAuthenticate(false)
    localStorage.removeItem('isAuthenticate')
    Cookies.remove('isAuthenticate')
    navigate('/')
  }


  return(
    <AuthContext.Provider value={{isAuthenticate,login ,logout}}>
        {children}
    </AuthContext.Provider>
  )

};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (context === undefined){
        throw new Error('Erro , Tente novamente mais tarde')
    }
    return context

}