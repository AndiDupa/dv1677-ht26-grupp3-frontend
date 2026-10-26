import { fetcher } from './components/fetcher'
import { useEffect, useState, useCallback } from 'react'
//import { Outlet } from "react-router";
import './App.css'
import Updates from './Socket.jsx'
import { io } from 'socket.io-client'
import { getResources, getResource } from './api/resources.js'

function Test() {
  const fetchedData = fetcher(`${import.meta.env.VITE_API_URL}api`);
  console.log("1")
  console.log(fetchedData);

  /*if (!fetchedData) {
    return;
  }*/

  const resources = getResources()
  console.log("2")
  console.log(resources)

  useSocket(
    'test:performed', ({  message  }) => {
      console.log(message)
    }
  )

  //const data = fetchedData.resources;

  return (
    <>
      <section className="center max-height">
        <div className="content">
          <h2>Testing</h2><br />
          <div>
            <Updates />
          </div>
        </div>
      </section>
    </>
  )
}

export default Test
