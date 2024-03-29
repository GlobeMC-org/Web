import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "src/App";

import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
