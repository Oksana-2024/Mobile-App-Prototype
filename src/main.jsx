import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
