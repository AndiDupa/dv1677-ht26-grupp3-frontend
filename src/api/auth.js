const API = import.meta.env.VITE_API_URL || 'http://localhost:3000/'

export async function register(mail, password) {
  const res = await fetch(`${API}api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({  mail: mail, password: password  }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Registration failed')
  return data
}

//localStorage.setItem('token', data.token) after this succeeds
export async function login(mail, password) {
  const res = await fetch(`${API}api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({  mail: mail, password: password  }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Login failed')
  console.log(data)
  return data
}
