import InstructorCard from '../components/InstructorCard'
import instructors from '../data/instructors'

function Instructors() {
  return (
    <div className="instructors-page">

      {/* Header */}
      <section className="page-header">
        <span>MEET OUR TEAM</span>

        <h1>Learn From The Best</h1>

        <p>
          Our experienced instructors bring real-world knowledge
          and practical expertise into every classroom.
        </p>
      </section>

      {/* Instructors */}
      <section className="section">

        <div className="instructors-grid">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor.id}
              instructor={instructor}
            />
          ))}
        </div>

      </section>

    </div>
  )
}

export default Instructors