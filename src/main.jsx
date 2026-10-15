import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Test from './Test.jsx'

const baseURL = "/dv1677-ht26-grupp3-frontend"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dv1677-ht26-grupp3-frontend/" element={<App />}>
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
