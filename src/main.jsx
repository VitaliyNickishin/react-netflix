import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { ThemeProvider } from "./components/ThemeProvider.jsx";
import { AppRoutes } from "./routes/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {/* <App /> */}
      <AppRoutes />
    </ThemeProvider>
  </StrictMode>,
);
