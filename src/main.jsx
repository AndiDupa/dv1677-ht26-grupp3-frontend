import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, BrowserRouter, Routes, Route, NavLink, Link, Outlet } from "react-router";
import './index.css'
import App from './App.jsx'
import Test from './Test.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx'
import ProtectedRoute from './utils/protectedRoutes.jsx';

const baseURL = "/dv1677-ht26-grupp3-frontend"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <section className="grid max-height">
        <App />
      </section>
    </BrowserRouter>
  </StrictMode>,
)
