import React, { useContext, useEffect } from 'react';

import  { ReactNode } from 'react';


const AuthContext = React.createContext<{ user: null; setUser: React.Dispatch<React.SetStateAction<null>>; } | null>(null);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserData(token).then(setUser).catch(console.error);
    }
  }, []);

  const fetchUserData = async (token: string): Promise<any> => {
    try {
      const response = await fetch('/api/auth/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Falha ao buscar dados do usuário');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};