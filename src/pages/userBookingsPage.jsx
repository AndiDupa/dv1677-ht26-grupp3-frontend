import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { getUserBookings } from '../api/resources.js'

const baseUrl = `${import.meta.env.FRONTEND_URL}dv1677-ht26-grupp3-frontend`;

export default function UserBookingsPage() {
  const [bookings, setBookings] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("rb_user"));
  const navigate = useNavigate();

  console.log("user: ", user);

  const deleteHandler = async (e, secret) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      secret: secret,
      user: user
    };

    try {
      const res = await fetch("https://dv1677-worf.nplab.bth.se/api/test/broker/cancel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("rb_token")}`
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        const result = await res.json();
        console.log(result);
        navigate(baseUrl);
      } else {
        console.log("Error: Request was not accepted. Are you logged in?");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

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
              <form className='grid-form' onSubmit={(e) => deleteHandler(e, r._id)}>
                <p className='form-right'>
                  <input type="submit" value="cancel" className='link margin-top max-width' />
                </p>
              </form>
            {/* </Link> */}
            </div>
          ))}
          {bookings.length === 0 && !error && <p style={{ color: '#64748b' }}>Inga bokningar hittades.</p>}
        </div>
      </div>
    </div>
  )
}
