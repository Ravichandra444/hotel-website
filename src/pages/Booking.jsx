import { useState } from 'react'
import { rooms } from './Rooms.jsx'

export default function Booking() {
  const [form, setForm] = useState({ name: '', room: rooms[0].name, checkIn: '', checkOut: '' })
  const [done, setDone] = useState(false)

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setDone(true)
  }

  if (done) {
    return (
      <>
        <h1>Booking Confirmed ✅</h1>
        <p>
          Thank you {form.name}! Your {form.room} is booked from {form.checkIn} to {form.checkOut}.
        </p>
        <button className="btn" onClick={() => setDone(false)}>Make another booking</button>
      </>
    )
  }

  return (
    <>
      <h1>Book a Room</h1>
      <form className="form" onSubmit={submit}>
        <label>Name
          <input name="name" value={form.name} onChange={change} required />
        </label>
        <label>Room
          <select name="room" value={form.room} onChange={change}>
            {rooms.map((r) => <option key={r.id}>{r.name}</option>)}
          </select>
        </label>
        <label>Check-in
          <input type="date" name="checkIn" value={form.checkIn} onChange={change} required />
        </label>
        <label>Check-out
          <input type="date" name="checkOut" value={form.checkOut} onChange={change} required />
        </label>
        <button className="btn" type="submit">Confirm Booking</button>
      </form>
    </>
  )
}
