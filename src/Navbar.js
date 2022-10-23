import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <Link to="/Registration">Registration</Link>
        <Link to="/Dashboard">Dashboard</Link>
      </ul>
    </nav>
  )
}

