import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Skill<span>Forge</span></h2>

          <p>
            Empowering students with practical skills for a successful
            career in the digital world.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/instructors">Instructors</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>📍 Karachi, Pakistan</p>
          <p>📞 +92 300 1234567</p>
          <p>✉️ info@skillforge.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 SkillForge. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer