import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainApp } from "./MainApp";
import { AboutPage, HomePage, LoginPage } from "./pages";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: '/*',
        element: <Navigate to={'/'} />
      }
    ]
  }
])