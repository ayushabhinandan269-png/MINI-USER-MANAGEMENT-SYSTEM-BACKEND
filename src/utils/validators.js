// Email format validation
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Password strength validation
export const isStrongPassword = (password) => {
  // Minimum 6 characters
  return typeof password === "string" && password.length >= 6;
};
