import { useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'

function CourseDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const course = courses.find(
    (course) => course.id === Number(id)
  )

  if (!course) {
    return (
      <section className="not-found-content">
        <h1>Course Not Found</h1>

        <p>
          The course you are looking for does not exist.
        </p>

        <button
          className="primary-button"
          onClick={() => navigate('/courses')}
        >
          Back to Courses
        </button>
      </section>
    )
  }

  return (
    <div className="course-details">

      {/* Course Header */}
      <section className="details-header">
        <div className="details-header-content">

          <span className="course-level">
            {course.level}
          </span>

          <h1>{course.name}</h1>

          <p>{course.description}</p>

          <div className="details-meta">
            <span>⏱ {course.duration}</span>
            <span>👨‍🏫 {course.instructor}</span>
          </div>

        </div>
      </section>


      {/* Course Content */}
      <section className="course-details-content">

        <div className="course-main">

          <img
            src={course.image}
            alt={course.name}
            className="details-image"
          />

          <h2>About This Course</h2>

          <p>
            This course is designed to give students practical
            knowledge and skills that can be applied in real-world
            situations. You will learn through structured lessons,
            practical exercises and projects.
          </p>

          <h2>Course Features</h2>

          <div className="features-list">
            {course.features.map((feature, index) => (
              <div
                className="feature-item"
                key={index}
              >
                <span>✓</span>
                {feature}
              </div>
            ))}
          </div>

        </div>


        {/* Enrollment Card */}
        <aside className="enrollment-card">

          <h3>Ready to Start?</h3>

          <p>
            Take the next step and start building your skills today.
          </p>

          <div className="enrollment-info">
            <div>
              <span>Duration</span>
              <strong>{course.duration}</strong>
            </div>

            <div>
              <span>Level</span>
              <strong>{course.level}</strong>
            </div>

            <div>
              <span>Instructor</span>
              <strong>{course.instructor}</strong>
            </div>
          </div>

          <button
            className="primary-button enroll-button"
            onClick={() => navigate('/contact')}
          >
            Enroll Now
          </button>

        </aside>

      </section>

    </div>
  )
}

export default CourseDetails