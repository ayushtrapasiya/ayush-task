import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HandleRouter from './Routes/AppRouter'


createRoot(document.getElementById('root')).render(
  <HandleRouter/>
)
