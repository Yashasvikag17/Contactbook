import React from 'react'; // Import React

import { createRoot } from "react-dom/client";
import App from "./components/App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
