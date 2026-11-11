const API = import.meta.env.VITE_API_URL || 'http://localhost:3000/'

export async function getResources() {
  const res = await fetch(`${API}api/resources/all`)
  if (!res.ok) throw new Error('Failed to fetch resources')
  return res.json()
}

export async function getUserBookings(user) {
  const res = await fetch(`${API}api/booking/${user}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("rb_token")}`
    }
  })
  if (!res.ok) throw new Error('Failed to fetch resources')
  return res.json()
}

export async function getResource(id) {
  const res = await fetch(`${API}api/resources/${id}`)
  if (!res.ok) throw new Error('Failed to fetch resource')
  return res.json()
}

/*export async function getAvailability(id, date) {
  const res = await fetch(`${API}/api/resources/${id}/availability?date=${date}`)
  if (!res.ok) throw new Error('Failed to fetch availability')
  return res.json()
}*/