import MainLayout from "@/layouts/MainLayout";
import NotFoundPage from "@/pages/not-found-page";
import { PATH_URL } from "@/shared/constants/app";
import { lazy } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const HomePage = lazy(() => import("@/pages/home"));
const LoginPage = lazy(() => import("@/pages/login"));
const RegisterPage = lazy(() => import("@/pages/register"));
const EditProfilePage = lazy(() => import("@/pages/edit-profile"));
const MovieListPage = lazy(() => import("@/pages/movie-list"));

const pages = [
  {
    Component: HomePage,
    hasMainLayout: true,
    path: PATH_URL.HOME,
  },
  {
    Component: LoginPage,
    hasMainLayout: false,
    path: PATH_URL.LOGIN,
  },
  {
    Component: RegisterPage,
    hasMainLayout: false,
    path: PATH_URL.REGISTER,
  },
  {
    Component: EditProfilePage,
    hasMainLayout: true,
    path: PATH_URL.EDIT_PROFILE,
  },
  {
    Component: MovieListPage,
    hasMainLayout: true,
    path: PATH_URL.MOVIE,
  },
];

const routes: RouteObject[] = [
  {
    path: PATH_URL.LOGIN,
    element: <PublicRoute />,
    children: [{ path: "", element: <LoginPage /> }],
  },
  {
    path: PATH_URL.REGISTER,
    element: <PublicRoute />,
    children: [{ path: "", element: <RegisterPage /> }],
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: pages.map(({ Component, path }) => ({
      path,
      element: (
        <MainLayout>
          <Component />
        </MainLayout>
      ),
    })),
  },
  {
    path: PATH_URL.NOT_FOUND,
    element: <NotFoundPage />,
  },
];

export const router = createBrowserRouter(routes);
