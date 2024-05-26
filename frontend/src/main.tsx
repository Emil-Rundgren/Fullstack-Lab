import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
const domNode = document.getElementById("root");

if (domNode) {
  const root = createRoot(domNode);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
