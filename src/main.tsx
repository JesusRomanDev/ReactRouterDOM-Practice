import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Index, {loader as indexLoader} from './pages/Index'
import Nosotros, {action as nosotrosAction} from './pages/Nosotros'
import Editar, {loader as loaderEditar, action as actionEditar} from './pages/Editar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader
      },
      {
        path: '/nosotros',
        element: <Nosotros />,
        action: nosotrosAction
      },
      {
        path: '/editar/:editarId',
        element: <Editar />,
        loader: loaderEditar,
        action: actionEditar
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
