import { useNavigate } from 'react-router-dom'

function CourseCard({ course }) {
  const navigate = useNavigate()

  return (
    <div className="course-card">
      <img
        src={course.image}
        alt={course.name}
        className="course-image"
      />

      <div className="course-content">
        <span className="course-level">
          {course.level}
        </span>

        <h3>{course.name}</h3>

        <p>{course.description}</p>

        <div className="course-info">
          <span>⏱ {course.duration}</span>
          <span>👨‍🏫 {course.instructor}</span>
        </div>

        <button
          className="course-button"
          onClick={() => navigate(`/courses/${course.id}`)}
        >
          View Details →
        </button>
      </div>
    </div>
  )
}

export default CourseCard