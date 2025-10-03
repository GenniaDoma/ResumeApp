import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Resume_SPA from './Resume_SPA.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Resume_SPA />
  </StrictMode>,
)
