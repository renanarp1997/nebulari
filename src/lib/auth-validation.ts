export type AuthFieldErrors = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLogin(email: string, password: string): AuthFieldErrors {
  const errors: AuthFieldErrors = {};

  if (!email.trim()) {
    errors.email = "Informe seu e-mail.";
  } else if (!EMAIL_RE.test(email.trim())) {
    errors.email = "E-mail inválido.";
  }

  if (!password) {
    errors.password = "Informe sua senha.";
  } else if (password.length < 6) {
    errors.password = "A senha deve ter pelo menos 6 caracteres.";
  }

  return errors;
}

export function validateRegister(data: {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}): AuthFieldErrors {
  const errors: AuthFieldErrors = {};

  if (!data.name.trim()) {
    errors.name = "Informe seu nome completo.";
  } else if (data.name.trim().length < 3) {
    errors.name = "Nome muito curto.";
  }

  if (!data.email.trim()) {
    errors.email = "Informe seu e-mail.";
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = "E-mail inválido.";
  }

  if (data.phone.trim() && data.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Telefone inválido.";
  }

  if (!data.password) {
    errors.password = "Crie uma senha.";
  } else if (data.password.length < 6) {
    errors.password = "A senha deve ter pelo menos 6 caracteres.";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirme sua senha.";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "As senhas não coincidem.";
  }

  return errors;
}
