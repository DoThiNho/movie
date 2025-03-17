import { createRoot } from "react-dom/client";
import "./index.css";
import { App, ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { Provider } from "react-redux";
import { store } from "@/store";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App className="w-screen h-screen">
      <ConfigProvider>
        <RouterProvider router={router} />
      </ConfigProvider>
      <ToastContainer />
    </App>
  </Provider>
);
