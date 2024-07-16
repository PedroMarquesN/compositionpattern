import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type UserRole = "Admin" | "Client" | "User" | "Viewer";

interface UserContextType {
  userRole: UserRole | null;
  userName: string;
  loading: boolean;
  setUserRole: (role: UserRole) => void;
  setUserName: (name: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

  useEffect(() => {
    const loadUserData = async () => {
      const role = localStorage.getItem("role") as UserRole | null;
      const username = localStorage.getItem("username") || "";
      setUserRole(role);
      setUserName(username);
      setLoading(false); 
    };

    loadUserData();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    setUserRole(null);
    setUserName("");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ userRole, userName, loading, setUserRole, setUserName, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("ERRROR");
  }
  return context;
};
