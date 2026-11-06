import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Rooms from './pages/Rooms.jsx'
import Booking from './pages/Booking.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Grand Stay Hotel</h2>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 - Page not found</h1>} />
        </Routes>
      </main>

      <footer className="footer">© 2026 Grand Stay Hotel</footer>
    </>
  )
}
