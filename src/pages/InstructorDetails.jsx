import { useNavigate, useParams } from 'react-router-dom'
import instructors from '../data/instructors'

function InstructorDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const instructor = instructors.find(
    (instructor) => instructor.id === Number(id)
  )

  if (!instructor) {
    return (
      <section className="not-found-content">
        <h1>Instructor Not Found</h1>

        <p>
          The instructor you are looking for does not exist.
        </p>

        <button
          className="primary-button"
          onClick={() => navigate('/instructors')}
        >
          Back to Instructors
        </button>
      </section>
    )
  }

  return (
    <div className="instructor-details">

      <section className="instructor-details-header">
        <div className="instructor-details-container">

          <img
            src={instructor.image}
            alt={instructor.name}
            className="instructor-details-image"
          />

          <div className="instructor-details-info">

            <span>{instructor.designation}</span>

            <h1>{instructor.name}</h1>

            <p>
              <strong>Expertise:</strong>{' '}
              {instructor.expertise}
            </p>

            <p>
              <strong>Experience:</strong>{' '}
              {instructor.experience}
            </p>

          </div>

        </div>
      </section>

      <section className="instructor-bio section">

        <div>
          <span>ABOUT THE INSTRUCTOR</span>

          <h2>Professional Experience</h2>

          <p>{instructor.bio}</p>

          <p>
            With years of industry experience, {instructor.name}
            {' '}brings practical knowledge and real-world examples
            to every training session.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate('/courses')}
          >
            Explore Courses
          </button>
        </div>

      </section>

    </div>
  )
}

export default InstructorDetails