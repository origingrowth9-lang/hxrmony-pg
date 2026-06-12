export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateContactForm = (data: {
  name: string;
  company: string;
  email: string;
  projectObjective: string;
}): { valid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!data.name.trim()) {
    errors.name = 'El nombre es requerido';
  }

  if (!data.company.trim()) {
    errors.company = 'La empresa es requerida';
  }

  if (!data.email.trim()) {
    errors.email = 'El correo es requerido';
  } else if (!validateEmail(data.email)) {
    errors.email = 'El correo no es válido';
  }

  if (!data.projectObjective.trim()) {
    errors.projectObjective = 'El objetivo del proyecto es requerido';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};
