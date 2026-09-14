import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { seedAdminUser } from "./services/authService.js";

seedAdminUser();
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppRoutes />
    <ToastContainer position="top-right" autoClose={3000} theme="light" />
  </AuthProvider>,
);
