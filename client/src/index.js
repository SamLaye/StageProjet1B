import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Stats from './components/Stats';
import Connexion from './pages/Connexion';
import Cards from './components/Cards';
import Inscription from './pages/Inscription';
import ForgetPSW from './pages/ForgetPSW';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/connexion" />
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "timeline/stats",
        element: <Stats />,
      },
      {
        path: "timeline/cards",
        element: <Cards />,
      }
    ]
  },
  {
    path: "/connexion",
    element: <Connexion />
  },
  {
    path: "/inscription",
    element: <Inscription />
  },
  {
    path: "/motdepasseoublie",
    element: <ForgetPSW />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route}>

    </RouterProvider>
  </React.StrictMode>
);
