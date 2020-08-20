import React, { createContext, useContext, useCallback, useState } from "react";

import api from "../services/api";

interface SignInCredentialsUser {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface AuthContext {
  user: User;
  signIn(credentials: SignInCredentialsUser): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem("@naver:user");
    const token = localStorage.getItem("@naver:token");

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/users/login", { email, password });

    const { token, id } = response.data;

    localStorage.setItem(
      "@naver:user",
      JSON.stringify({ user: { id, email } })
    );
    localStorage.setItem("@naver:token", token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user: { id, email } });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@naver:token");
    localStorage.removeItem("@naver:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContext {
  const context = useContext(AuthContext);

  return context;
}
