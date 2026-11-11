import { fetcher } from './components/fetcher'
import { getBookings, createBooking, cancelBooking } from './api/bookings.js';
import { useEffect, useState, useCallback } from 'react'
//import { Outlet } from "react-router";
//import './App.css'
//import Updates from './Socket.jsx'
import { io } from 'socket.io-client'
import { useAuth } from './context/AuthContext.jsx'
//import { useState, useEffect } from 'react'
//import { getResources, getResource } from './api/resources.js'

function Test() {
  const { token, user } = useAuth()
  const [myBookings, setMyBookings] = useState([])

  const loadMyBookings = useCallback(async () => {
    if (!user) return
    const b = await getBookings(1, user)
    setMyBookings(b.filter(bk => bk.resourceId === 1 || bk.resourceId?._id === 1))
  }, [user, 1])

  useEffect(() => {
    loadMyBookings()
  }, [loadMyBookings])

  /*if (!fetchedData) {
    return;
  }*/

  /*useSocket(
    'test:performed', ({  message  }) => {
      console.log(message)
    }
  )*/

  //const data = fetchedData.resources;

  return (
    <>
      <section className="center max-height">
        <div className="content">
          <h2>Testing</h2><br />
          <div>
            {myBookings.length > 0 && (
              <div className="card">
                <h2>Dina bokningar för denna resurs</h2>
                {myBookings.filter(b => b.status === 'confirmed').map(b => (
                  <div key={b._id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.9rem' }}>
                      {new Date(b.startsAt).toLocaleDateString('sv')} {new Date(b.startsAt).getUTCHours()}:00–{new Date(b.endsAt).getUTCHours()}:00
                    </span>
                    <button className="secondary" style={{ padding: '0.2rem 0.6rem' }} onClick={() => selectBooking(b)}>Kommentarer</button>
                    <button className="danger" style={{ padding: '0.2rem 0.6rem' }} onClick={() => handleCancel(b._id)}>Avboka</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Test
