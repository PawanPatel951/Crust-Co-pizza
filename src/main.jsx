import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { CartProvider } from "./context/CartContext";

AOS.init({
  duration: 500,
  once: true,
  offset: 60,
  easing: "ease-out",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
