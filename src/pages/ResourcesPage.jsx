import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getResources } from '../api/resources.js'

export default function ResourcesPage() {
  const [resources, setResources] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getResources().then(setResources).catch(err => setError(err.message))
  }, [])

  return (
    <div className="content">
      <div className='form-container'>
        <h1 className='center margin-bottom'>Alla resurser</h1>
        <div className="container even-grid">
          {error && <p className="error">{error}</p>}
          {resources.map(r => (
            <div className="card center booking" to={`/resources/${r._id}`} key={r._id}>
            {/* <Link className="card center" to={`/resources/${r._id}`} key={r._id}> */}
              {console.log(r)}
              <div style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <strong>{r.name}</strong><br />
                  <span className={`badge ${r.provider}`}><b>Provider:</b> {r.provider}</span>
                </div>
                {/* {r.description && <p style={{ marginTop: '0.5rem', color: '#64748b', fontSize: '0.9rem' }}>{r.description}</p>} */}

                {r.capacity && Object.entries(r.capacity).map(([key, value]) => (
                  <div>
                    <small><b>{key}:</b> {Math.round(value * 100) / 100}</small>
                  </div>
                ))}
              </div>
            {/* </Link> */}
            </div>
          ))}
          {resources.length === 0 && !error && <p style={{ color: '#64748b' }}>Inga resurser hittades.</p>}
        </div>
      </div>
    </div>
  )
}
