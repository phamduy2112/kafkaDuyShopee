import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import toast, { Toaster } from 'react-hot-toast';
import ToasterConfig from './components/toast/ToasterConfig.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ToasterConfig/>
  </StrictMode>,
)
