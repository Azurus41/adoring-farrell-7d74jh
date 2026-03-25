import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Moncomp from "./Moncomp";
import MonArt from "./MonArt";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Moncomp />
  </StrictMode>
);
