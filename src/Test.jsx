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
            <h1>TEST</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Test
