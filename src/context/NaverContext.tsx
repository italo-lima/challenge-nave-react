import React, { createContext, useContext, useCallback } from "react";

import api from "../services/api";

export interface CreateNaver {
  name: string;
  job_role: string;
  birthdate: string;
  admission_date: string;
  project: string;
  url: string;
}

export interface Naver {
  id: string;
  url: string;
  name: string;
  admission_date: string;
  job_role: string;
  birthdate: string;
  project: string;
}

interface NaverContext {
  loadNavers(): Promise<Naver[]>;
  createNaver(data: CreateNaver): Promise<void>;
  updateNaver(id: string, data: Naver): Promise<void>;
  deleteNaver(id: string): Promise<void>;
  loadNaver(id: string): Promise<Naver>;
}

const NaverContext = createContext<NaverContext>({} as NaverContext);

export const NaverProvider: React.FC = ({ children }) => {
  const loadNavers = useCallback(async () => {
    const { data } = await api.get("/navers");

    return data;
  }, []);

  const loadNaver = useCallback(async (id: string) => {
    const { data } = await api.get(`/navers/${id}`);

    return data;
  }, []);

  const createNaver = useCallback(async (data: CreateNaver) => {
    await api.post("/navers", data);
  }, []);

  const deleteNaver = useCallback(async (id: string) => {
    await api.delete(`/navers/${id}`);
  }, []);

  const updateNaver = useCallback(async (id: string, data: Naver) => {
    console.log(data);
    await api.put(`/navers/${id}`, data);
  }, []);

  return (
    <NaverContext.Provider
      value={{ loadNavers, loadNaver, createNaver, deleteNaver, updateNaver }}
    >
      {children}
    </NaverContext.Provider>
  );
};

export function useNaver(): NaverContext {
  const context = useContext(NaverContext);

  return context;
}
