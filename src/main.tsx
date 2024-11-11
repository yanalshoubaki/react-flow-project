import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FlowProvider, ThemeProvider } from "./providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <FlowProvider>
        <App />
      </FlowProvider>
    </ThemeProvider>
  </StrictMode>
);
