import { Link } from 'react-router-dom'

export const rooms = [
  { id: 1, name: 'Standard Room', price: 2000, info: '1 double bed, AC, free Wi-Fi' },
  { id: 2, name: 'Deluxe Room', price: 3500, info: '1 king bed, city view, breakfast included' },
  { id: 3, name: 'Family Suite', price: 5500, info: '2 bedrooms, living area, breakfast included' },
]

export default function Rooms() {
  return (
    <>
      <h1>Our Rooms</h1>
      <div className="cards">
        {rooms.map((r) => (
          <div className="card" key={r.id}>
            <h3>{r.name}</h3>
            <p>{r.info}</p>
            <p className="price">₹{r.price} / night</p>
            <Link className="btn" to="/booking">Book</Link>
          </div>
        ))}
      </div>
    </>
  )
}
