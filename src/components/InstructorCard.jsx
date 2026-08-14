import { useNavigate } from 'react-router-dom'

function InstructorCard({ instructor }) {
  const navigate = useNavigate()

  return (
    <div className="instructor-card">

      <img
        src={instructor.image}
        alt={instructor.name}
        className="instructor-image"
      />

      <div className="instructor-content">

        <h3>{instructor.name}</h3>

        <span className="instructor-designation">
          {instructor.designation}
        </span>

        <p>
          <strong>Expertise:</strong> {instructor.expertise}
        </p>

        <p>
          <strong>Experience:</strong> {instructor.experience}
        </p>

        <button
          className="instructor-button"
          onClick={() =>
            navigate(`/instructors/${instructor.id}`)
          }
        >
          View Profile →
        </button>

      </div>

    </div>
  )
}

export default InstructorCard