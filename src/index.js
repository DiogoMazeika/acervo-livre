import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Root from './routes';
import ErrorPage from './errorPage';
import TelaInicial from './app/telaInicial';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './css/index.css';
import './css/base.css';
import Login from './login';
import NovoUsuario from './login/novoUsuario';
import Arquivo from './app/arquivo';

const router = createBrowserRouter([
  {
    path: '/app',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'app/arquivo',
        element: <Arquivo />,
      },
      {
        index: true,
        path: '/app/*',
        element: <TelaInicial />,
      },
    ],
  },
  {
    path: '/login',
    // element: <Login />,
    children: [
      {
        path: 'cadastro',
        element: <NovoUsuario />,
      },
      {
        index: true,
        path: '/login/*',
        element: <Login />,
      },
    ]
  },
  {
    path: '/*',
    element: <Navigate to="/app" replace />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
