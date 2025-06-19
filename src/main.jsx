import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
// import { CartContext } from './Context.jsx/CartContext.jsx'
import { CartProviderPartha } from './Context.jsx/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartProviderPartha>
  <BrowserRouter>
    <App />
  </BrowserRouter>  
  </CartProviderPartha>
  
)
