import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// render ในส่วนอะไร เรนเดอร์อะไร ในส่วนนี้คือเรนเดอร์ App
// ตัว main ตัว App level มันเท่ากัน