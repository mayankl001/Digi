import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // 👈 Import kiya
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider> {/* 👈 Context provide karne ke liye wrap kiya */}
    <App />
  </HelmetProvider>
);