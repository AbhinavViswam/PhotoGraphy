import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router/mainRouter.jsx'
import { RouterProvider } from 'react-router-dom'
import App from "./App.jsx"

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router}>
    <App/>
  </RouterProvider>
)
