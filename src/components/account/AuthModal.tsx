"use client";

import { useCallback, useEffect, useState } from "react";
import { X, Loader2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { AuthField } from "@/components/account/AuthField";
import { validateLogin, validateRegister } from "@/lib/auth-validation";
import { useScrollLock } from "@/hooks/useScrollLock";

export function AuthModal() {
  const { modalOpen, modalView, closeModal, setModalView, login, register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [marketing, setMarketing] = useState(true);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const resetFormState = useCallback(() => {
    setFieldErrors({});
    setFormError("");
    setLoading(false);
  }, []);

  const handleClose = useCallback(() => {
    resetFormState();
    closeModal();
  }, [closeModal, resetFormState]);

  useScrollLock(modalOpen);

  useEffect(() => {
    if (!modalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [modalOpen, handleClose]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    const errors = validateLogin(email, password);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.ok) {
      resetFormState();
    } else {
      setFormError(result.error ?? "E-mail ou senha incorretos.");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    const errors = validateRegister({
      name,
      email,
      phone,
      password,
      confirmPassword,
    });
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    const result = await register({ name, email, phone, password, marketing });
    setLoading(false);
    if (result.ok) {
      resetFormState();
    } else {
      setFormError(result.error ?? "Erro ao criar conta.");
    }
  };

  if (!modalOpen) return null;

  return (
    <div className="auth-modal-root" role="presentation">
      <button
        type="button"
        aria-label="Fechar"
        className="auth-modal-backdrop ui-overlay-fade"
        onClick={handleClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        className="auth-modal-panel ui-panel-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="auth-modal-close"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>

        {modalView === "login" ? (
          <form key="login" onSubmit={handleLogin} className="auth-modal-form">
            <h2 id="auth-modal-title" className="auth-modal-title">
              Entrar na sua conta
            </h2>
            <p className="auth-modal-subtitle">
              Acesse pedidos, favoritos e checkout mais rápido.
            </p>

            {formError && (
              <p className="auth-form-error" role="alert">
                {formError}
              </p>
            )}

            <AuthField
              id="login-email"
              label="E-mail"
              type="email"
              value={email}
              onChange={setEmail}
              error={fieldErrors.email}
              placeholder="seu@email.com"
              autoComplete="email"
            />
            <AuthField
              id="login-password"
              label="Senha"
              type="password"
              value={password}
              onChange={setPassword}
              error={fieldErrors.password}
              placeholder="••••••••"
              autoComplete="current-password"
            />

            <button type="submit" className="auth-btn-primary" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Entrando…
                </>
              ) : (
                "Entrar"
              )}
            </button>

            <button type="button" className="auth-link-muted">
              Esqueci minha senha
            </button>

            <p className="auth-modal-footer">
              Ainda não tem conta?{" "}
              <button
                type="button"
                className="auth-link-accent"
                onClick={() => {
                  setFieldErrors({});
                  setFormError("");
                  setModalView("register");
                }}
              >
                Criar conta
              </button>
            </p>
          </form>
        ) : (
          <form key="register" onSubmit={handleRegister} className="auth-modal-form">
            <h2 id="auth-modal-title" className="auth-modal-title">
              Criar sua conta
            </h2>
            <p className="auth-modal-subtitle">
              Cadastro rápido para comprar com experiência premium.
            </p>

            {formError && (
              <p className="auth-form-error" role="alert">
                {formError}
              </p>
            )}

            <AuthField
              id="reg-name"
              label="Nome completo"
              value={name}
              onChange={setName}
              error={fieldErrors.name}
              placeholder="Seu nome"
              autoComplete="name"
            />
            <AuthField
              id="reg-email"
              label="E-mail"
              type="email"
              value={email}
              onChange={setEmail}
              error={fieldErrors.email}
              placeholder="seu@email.com"
              autoComplete="email"
            />
            <AuthField
              id="reg-phone"
              label="Telefone"
              type="tel"
              value={phone}
              onChange={setPhone}
              error={fieldErrors.phone}
              placeholder="(11) 99999-9999"
              autoComplete="tel"
            />
            <AuthField
              id="reg-password"
              label="Senha"
              type="password"
              value={password}
              onChange={setPassword}
              error={fieldErrors.password}
              placeholder="Mínimo 6 caracteres"
              autoComplete="new-password"
            />
            <AuthField
              id="reg-confirm"
              label="Confirmar senha"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              error={fieldErrors.confirmPassword}
              placeholder="Repita a senha"
              autoComplete="new-password"
            />

            <label className="auth-checkbox">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="auth-checkbox-input"
              />
              <span>Aceito receber novidades e ofertas</span>
            </label>

            <button type="submit" className="auth-btn-primary" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Criando…
                </>
              ) : (
                "Criar conta"
              )}
            </button>

            <p className="auth-modal-footer">
              Já tem conta?{" "}
              <button
                type="button"
                className="auth-link-accent"
                onClick={() => {
                  setFieldErrors({});
                  setFormError("");
                  setModalView("login");
                }}
              >
                Entrar
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
