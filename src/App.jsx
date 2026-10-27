import { fetcher } from './components/fetcher'
import { Outlet, Routes, Route, Link, Navigate, BrowserRouter } from "react-router";
/*import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'*/
import Test from './Test.jsx'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx'
import BookingPage from './pages/BookingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ProtectedRoute from './utils/protectedRoutes.jsx';
import './App.css'

const baseURL = "/dv1677-ht26-grupp3-frontend"

function Nav() {
  const { user, logout } = useAuth()
  return (
    <nav>
      <Link to="/dv1677-ht26-grupp3-frontend/" className="brand">Resource Booking</Link>
      <Link to="/dv1677-ht26-grupp3-frontend/">Resurser</Link>
      {user ? (
        <>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{user.email}</span>
          <button className="secondary" style={{ padding: '0.3rem 0.7rem' }} onClick={logout}>Logga ut</button>
        </>
      ) : (
        <>
          <Link to="/dv1677-ht26-grupp3-frontend/login">Logga in</Link>
          <Link to="/dv1677-ht26-grupp3-frontend/register">Registrera</Link>
        </>
      )}
    </nav>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<ResourcesPage />} />
        <Route path="/resources/:id" element={<BookingPage />} />
        <Route path="/dv1677-ht26-grupp3-frontend/login" element={<LoginPage />} />
        <Route path="/dv1677-ht26-grupp3-frontend/register" element={<RegisterPage />} />
        <Route path="/dv1677-ht26-grupp3-frontend/test" element={<Test />} />
        <Route path="/dv1677-ht26-grupp3-frontend/protected/" element={<ProtectedRoute />}>
          <Route path="test" element={<Test />} />
        </Route>
        <Route path="*" element={<Navigate to="/dv1677-ht26-grupp3-frontend/" replace />} />
      </Routes>
    </AuthProvider>
  )
}

