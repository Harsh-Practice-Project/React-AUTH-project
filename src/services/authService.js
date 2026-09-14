import bcrypt from "bcryptjs";

const AUTH_KEY = "auth_user";
const REGISTER_KEY = "registered_users";

/* =========================
   REGISTERED USERS
========================= */

export const getRegisteredUsers = () => {
  const users = localStorage.getItem(REGISTER_KEY);
  return users ? JSON.parse(users) : [];
};

export const saveRegisteredUser = (newUser) => {
  const users = getRegisteredUsers();

  const emailExists = users.some(
    (user) => user.email.toLowerCase() === newUser.email.toLowerCase().trim(),
  );

  if (emailExists) {
    return false;
  }

  const updatedUsers = [
    ...users,
    {
      ...newUser,
      email: newUser.email.toLowerCase().trim(),
    },
  ];

  localStorage.setItem(REGISTER_KEY, JSON.stringify(updatedUsers));

  return true;
};

export const findRegisteredUserByEmail = (email) => {
  const users = getRegisteredUsers();

  return (
    users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase().trim(),
    ) || null
  );
};

export const removeRegisteredUsers = () => {
  localStorage.removeItem(REGISTER_KEY);
};

/* =========================
   AUTH USER
========================= */

export const saveUser = (user) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem(AUTH_KEY);
  return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const isAuthenticated = () => {
  return !!getUser();
};

/* =========================
   ADMIN USER
========================= */

export const seedAdminUser = () => {
  const users = getRegisteredUsers();

  const adminExists = users.some(
    (user) =>
      user.role === "admin" && user.email === import.meta.env.VITE_ADMIN_EMAIL,
  );

  if (adminExists) return;

  const adminUser = {
    id: crypto.randomUUID(),
    name: "System Admin",
    email: import.meta.env.VITE_ADMIN_EMAIL,
    password: bcrypt.hashSync(import.meta.env.VITE_ADMIN_PASSWORD, 10),
    role: "admin",
    isActive: true,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(REGISTER_KEY, JSON.stringify([...users, adminUser]));
};
