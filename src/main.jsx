import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './assets/componnent/Header.jsx'
import Singnin from './assets/pages/linknavbar/Singnin.jsx'
import Singnup from './assets/pages/linknavbar/Singnup.jsx'
import About from './assets/pages/linknavbar/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
 
  },
  {
    path: "singin",
    element: <Singnin />,
  },
    {
      path: "singup",
      element: <Singnup/>,
    },
    {
      path: "about",
      element: <About/>,
    },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
