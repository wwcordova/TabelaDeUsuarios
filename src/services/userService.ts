// src/services/userService.ts
import api from "./api";

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string; // Campo para a imagem do avatar
}

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/users");
  return response.data.data; // A API ReqRes retorna os dados sob a chave 'data'
};

export const createUser = async (user: User): Promise<User> => {
  const response = await api.post("/users", user);
  return response.data;
};

export const updateUser = async (id: number, user: User): Promise<User> => {
  const response = await api.put(`/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await api.delete(`/users/${id}`);
};
