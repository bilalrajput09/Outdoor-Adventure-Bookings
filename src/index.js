import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.min.js";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootComponent from "./root/RootComponent";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    children: [
      { path: "/", element: <App /> },
      { path: "signup", element: <RegisterForm /> },
      { path: "login", element: <LoginForm /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
