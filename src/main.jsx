import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CountComponent } from "./components/CountComponent";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CountComponent></CountComponent>
    </StrictMode>
);
