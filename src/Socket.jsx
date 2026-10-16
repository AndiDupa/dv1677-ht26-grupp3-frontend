import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

function Updates({ id }) {
  const [text, setText] = useState('')

  useEffect(() => {
    const socket = io(import.meta.env.VITE_API_URL)

    socket.emit('join', id)

    socket.on('test:performed', (ny) => setText(ny))

    // ⚠️ Utan den här raden öppnas en ny socket varje gång komponenten
    // renderas om, och de gamla stängs aldrig.
    return () => socket.disconnect()
  }, [id])

  return <textarea value={text} onChange={...} />
}

export default Updates;