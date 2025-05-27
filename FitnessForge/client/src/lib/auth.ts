import { apiRequest } from "./queryClient";
import { InsertUser, LoginData } from "@shared/schema";

export async function registerUser(userData: InsertUser) {
  const response = await apiRequest("POST", "/api/auth/register", userData);
  return response.json();
}

export async function loginUser(loginData: LoginData) {
  const response = await apiRequest("POST", "/api/auth/login", loginData);
  return response.json();
}

export async function getCurrentUser(token: string) {
  const response = await fetch("/api/auth/me", {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
  
  if (!response.ok) {
    throw new Error("Failed to get current user");
  }
  
  return response.json();
}
