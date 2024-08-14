import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes'
import GlobalStyles from './styles/GlobalStyles'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </StrictMode>,
)
