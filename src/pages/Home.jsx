import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero">
      <h1>Welcome to Grand Stay Hotel</h1>
      <p>Comfortable rooms, great food and warm hospitality in the heart of the city.</p>
      <Link className="btn" to="/booking">Book Now</Link>
    </section>
  )
}
