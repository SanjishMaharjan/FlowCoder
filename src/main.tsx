import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AppTest from './AppTest.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<AppTest />} />
      </Routes>
    </Router>
  </StrictMode>,
)
