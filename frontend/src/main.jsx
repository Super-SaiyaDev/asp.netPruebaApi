import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Path from './router/router';
import './css/index.css'
import Modal from 'react-modal';

// Define el elemento de la aplicación para el modal
Modal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Path />
  </StrictMode>,
)
