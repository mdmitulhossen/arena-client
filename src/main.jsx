import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './route/Route'
import '@smastrom/react-rating/style.css'
import AuthContextProvider from './Context/AuthContextProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={Route} />
    </AuthContextProvider>
  </React.StrictMode>,
)
