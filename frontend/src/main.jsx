import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Path from './router/router';
import './css/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Path />
  </StrictMode>,
)
