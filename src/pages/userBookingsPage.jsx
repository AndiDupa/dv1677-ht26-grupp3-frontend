import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getUserBookings } from '../api/resources.js'

export default function UserBookingsPage() {
  const [bookings, setBookings] = useState([])
  const [error, setError] = useState('')
  const user = JSON.parse(localStorage.getItem("rb_user"));
  console.log("user: ", user);

  useEffect(() => {
    getUserBookings(user).then(setBookings).catch(err => setError(err.message))
  }, [])

  return (
    <div className="content">
      <div className='form-container'>
        <h1 className='center margin-bottom'>Användarens bokningar</h1>
        <div className="container even-grid two-column">
          {error && <p className="error">{error}</p>}
          {bookings.map(r => (
            <div className="card center booking" to={`/bookings/${r._id}`} key={r._id}>
            {/* <Link className="card center booking" to={`/bookings/${r._id}`} key={r._id}> */}
              {console.log(r)}
              <div style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <strong>Bokning</strong><br />
                  <span className={`badge ${r.resourceId}`}>Resource ID: {r.resourceId}</span>
                </div>
                <small className={`badge ${r.startsAt}`}><b>Starts at:</b> {r.startsAt}</small><br />
                <small className={`badge ${r.endsAt}`}><b>Ends at:</b> {r.endsAt}</small><br />
                <small className={`badge ${r.status}`}><b>Status:</b> {r.status}</small>

                {r.broker && Object.entries(r.broker).map(([key, value]) => (
                  <small className='flex-column'><b>{key}:</b> {value}</small>
                ))}
              </div>
            {/* </Link> */}
            </div>
          ))}
          {bookings.length === 0 && !error && <p style={{ color: '#64748b' }}>Inga bokningar hittades.</p>}
        </div>
      </div>
    </div>
  )
}
