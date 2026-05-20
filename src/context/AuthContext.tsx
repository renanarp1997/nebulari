"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type AuthModalView = "login" | "register";

export interface AuthUser {
  name: string;
  email: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  modalOpen: boolean;
  modalView: AuthModalView;
  openLogin: () => void;
  openRegister: () => void;
  closeModal: () => void;
  setModalView: (view: AuthModalView) => void;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  register: (data: {
    name: string;
    email: string;
    phone: string;
    password: string;
    marketing: boolean;
  }) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/** Simula API — substituir por fetch ao conectar backend */
async function mockLoginApi(
  email: string,
  password: string
): Promise<{ ok: boolean; user?: AuthUser; error?: string }> {
  await new Promise((r) => setTimeout(r, 600));
  if (email === "demo@nebulari.com" && password === "demo123") {
    return { ok: true, user: { name: "Cliente Demo", email } };
  }
  if (password.length >= 6) {
    return {
      ok: true,
      user: { name: email.split("@")[0] ?? "Cliente", email },
    };
  }
  return { ok: false, error: "E-mail ou senha incorretos." };
}

async function mockRegisterApi(data: {
  name: string;
  email: string;
}): Promise<{ ok: boolean; user?: AuthUser; error?: string }> {
  await new Promise((r) => setTimeout(r, 700));
  return { ok: true, user: { name: data.name, email: data.email } };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalView, setModalView] = useState<AuthModalView>("login");

  const openLogin = useCallback(() => {
    setModalView("login");
    setModalOpen(true);
  }, []);

  const openRegister = useCallback(() => {
    setModalView("register");
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  const login = useCallback(async (email: string, password: string) => {
    const result = await mockLoginApi(email, password);
    if (result.ok && result.user) {
      setUser(result.user);
      setModalOpen(false);
      return { ok: true };
    }
    return { ok: false, error: result.error ?? "Não foi possível entrar." };
  }, []);

  const register = useCallback(
    async (data: {
      name: string;
      email: string;
      phone: string;
      password: string;
      marketing: boolean;
    }) => {
      void data.phone;
      void data.password;
      void data.marketing;
      const result = await mockRegisterApi({ name: data.name, email: data.email });
      if (result.ok && result.user) {
        setUser(result.user);
        setModalOpen(false);
        return { ok: true };
      }
      return { ok: false, error: result.error ?? "Não foi possível criar a conta." };
    },
    []
  );

  const logout = useCallback(() => setUser(null), []);

  const value = useMemo(
    () => ({
      user,
      modalOpen,
      modalView,
      openLogin,
      openRegister,
      closeModal,
      setModalView,
      login,
      register,
      logout,
    }),
    [
      user,
      modalOpen,
      modalView,
      openLogin,
      openRegister,
      closeModal,
      login,
      register,
      logout,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
