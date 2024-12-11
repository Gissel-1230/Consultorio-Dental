import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ConsultorioProvider } from './context/ConsultorioProvider'
import router from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConsultorioProvider>
      <RouterProvider router={router} />
    </ConsultorioProvider>
  </StrictMode>,
)
