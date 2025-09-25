import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from "./GlobalStyles/globalStyles";
import Home from './Home/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <Home />
  </StrictMode>,
)
