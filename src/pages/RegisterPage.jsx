import { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { register as apiRegister } from '../api/auth.js'
import { useAuth } from '../context/AuthContext.jsx'

const baseUrl = `${import.meta.env.FRONTEND_URL}dv1677-ht26-grupp3-frontend`

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  //const history = useHistory();
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    try {
      const data = await apiRegister(email, password)
      login(data.user, data.token)
      navigate(baseUrl)
      //window.location.href(baseUrl)
      //history.push(baseUrl)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="content">
      <div className="container">
        <div className='form-container'>
          <h1 className='center margin-bottom'>Registrera dig</h1>
          <form className='grid-form' onSubmit={handleSubmit}>
            <p className='form-right'>
              <label>E-post</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </p>
            <p className='form-right'>
              <label>Lösenord</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />
            </p>
            {error && <p className="error">{error}</p>}
            <button type="submit" style={{ width: '100%', marginTop: '0.5rem' }}>Registrera</button>
          </form>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>
            Har du ett konto? <Link to="/login" style={{ color: '#3b82f6' }}>Logga in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
