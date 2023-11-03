import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import "font-awesome/css/font-awesome.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterList } from "./routes/RouterList";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from 'react-redux';
import store from "./redux/store/store"

<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>;

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
          <ToastContainer />
          <RouterList />
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
