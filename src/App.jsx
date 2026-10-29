import { fetcher } from './components/fetcher'
import { Outlet, Routes, Route, Link, Navigate, BrowserRouter } from "react-router";
/*import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'*/
import Test from './Test.jsx'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx'
import BookingPageNew from './pages/BookingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ProtectedRoute from './utils/protectedRoutes.jsx';
import UserBookingsPage from './pages/userBookingsPage.jsx';
import './App.css'

const baseURL = "/dv1677-ht26-grupp3-frontend"

function Nav() {
  const { user, logout } = useAuth()
  return (
    <header className="header">
      <h1 className='margin-left'>Resource booker</h1>
      <nav className='nav'>
        <Link to="/dv1677-ht26-grupp3-frontend/protected/booking" className="brand link">Resource Booking</Link>
        <Link to="/dv1677-ht26-grupp3-frontend/protected/user" className="brand link">Mina bokningar</Link>
        <Link to="/dv1677-ht26-grupp3-frontend/resources" className='link'>Resurser</Link>
        {user ? (
          <>
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{user.email}</span>
            <button className="secondary link" style={{ padding: '0.3rem 0.7rem' }} onClick={logout}>Logga ut</button>
          </>
        ) : (
          <>
            <Link to="/dv1677-ht26-grupp3-frontend/login" className='link'>Logga in</Link>
            <Link to="/dv1677-ht26-grupp3-frontend/register" className='link'>Registrera</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Nav />
      <Routes>
        <Route path="/dv1677-ht26-grupp3-frontend/resources/" element={<ResourcesPage />} />
        <Route path="/dv1677-ht26-grupp3-frontend/protected/" element={<ProtectedRoute />}>
          <Route path="booking" element={<BookingPageNew />} />
        </Route>
        <Route path="/dv1677-ht26-grupp3-frontend/protected/" element={<ProtectedRoute />}>
          <Route path="user" element={<UserBookingsPage />} />
        </Route>
        <Route path="/dv1677-ht26-grupp3-frontend/login" element={<LoginPage />} />
        <Route path="/dv1677-ht26-grupp3-frontend/register" element={<RegisterPage />} />
        <Route path="/dv1677-ht26-grupp3-frontend/test" element={<Test />} />
        <Route path="/dv1677-ht26-grupp3-frontend/protected/" element={<ProtectedRoute />}>
          <Route path="test" element={<Test />} />
        </Route>
        <Route path="*" element={<Navigate to="/dv1677-ht26-grupp3-frontend/" replace />} />
      </Routes>
      <footer className='footer'>
        <h3 className='margin-left'>Andi Dupa (andu24) <br />Stella Karlsson (anka21)</h3>
        <div className='flex-column margin-right gap'>
          <a className='link' href="https://github.com/git-Stella/dv1677-ht26-grupp3-backend">Backend repo</a>
          <a className='link' href="https://github.com/AndiDupa/dv1677-ht26-grupp3-frontend">Frontend repo</a>
        </div>
      </footer>
    </AuthProvider>
  )
}

