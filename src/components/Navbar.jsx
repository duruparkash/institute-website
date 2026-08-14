import { NavLink, useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const navLinkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <button
          className="logo"
          onClick={() => navigate('/')}
        >
          Skill<span>Forge</span>
        </button>

        <div className="nav-links">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/courses" className={navLinkClass}>
            Courses
          </NavLink>

          <NavLink to="/instructors" className={navLinkClass}>
            Instructors
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        <button
          className="nav-button"
          onClick={() => navigate('/courses')}
        >
          Explore Courses
        </button>

      </div>

      {/* Demonstrating useLocation() */}
      <div className="current-page">
        Current Page: {location.pathname}
      </div>
    </nav>
  )
}

export default Navbar