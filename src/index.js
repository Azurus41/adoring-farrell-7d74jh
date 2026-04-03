import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Moncomp from "./component/Moncomp";
import MonArt from "./component/MonArt";
import ImgComp from "./component/ImgComp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Moncomp />
    <ImgComp />
  </StrictMode>
);
