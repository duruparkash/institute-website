import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

function Courses() {
  return (
    <div className="courses-page">

      {/* Page Header */}
      <section className="page-header">
        <span>EXPLORE OUR COURSES</span>

        <h1>Learn Skills That Matter</h1>

        <p>
          Choose from our professionally designed courses and build
          practical skills for your future career.
        </p>
      </section>

      {/* Courses */}
      <section className="all-courses section">

        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>

      </section>

    </div>
  )
}

export default Courses