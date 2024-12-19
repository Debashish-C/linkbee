import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Result from './components/Result/Result.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Result /> */}
  </StrictMode>,
)
