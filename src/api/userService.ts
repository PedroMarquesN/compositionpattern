// src/api/userService.ts
import axios from 'axios';
import { User } from '../@types/Users';
import { IRegisterFormInput } from '../@types/Forms/RegisterUser';
import { IFormInput } from '../@types/Forms/LoginForm';

const API_URL = 'http://localhost:8080/api/users';
const API_LOGIN = "http://localhost:8080/api/auth/login";
const API_URL_CREATE = "http://localhost:8080/api/users/create";



export const getUser = async (id: string | number): Promise<User> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const updateUser = async (id: string | number, user: Partial<User>): Promise<User> => {
  const response = await axios.put(`${API_URL}/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: string | number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};


export const loginUser = async (data: IFormInput) => {
    const response = await fetch(API_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error('Erro ao fazer login');
    }
  
    return response.json();
  };
  
  export const registerUser = async (data: IRegisterFormInput) => {
    const response = await fetch(API_URL_CREATE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error('Erro ao registrar usuário');
    }
  
    return response.json();
  };

  export const registerUserDashboard = async (data: IRegisterFormInput) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found");
  
      const response = await fetch("http://localhost:8080/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Failed to register user");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  };