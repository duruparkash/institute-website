import { useNavigate } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

function Home() {
  const navigate = useNavigate()

  const featuredCourses = courses.slice(0, 3)

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <span className="hero-badge">
            Learn Today. Lead Tomorrow.
          </span>

          <h1>
            Build Skills That
            <span> Shape Your Future</span>
          </h1>

          <p>
            Learn in-demand digital skills from experienced instructors
            and prepare yourself for the modern professional world.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => navigate('/courses')}
            >
              Explore Courses
            </button>

            <button
              className="secondary-button"
              onClick={() => navigate('/about')}
            >
              Learn More
            </button>
          </div>

        </div>

        <div className="hero-image">
          <div className="hero-card">
            <span>🎓</span>
            <h3>Start Learning</h3>
            <p>Turn your goals into real skills.</p>
          </div>
        </div>
      </section>


      {/* Introduction */}
      <section className="intro section">

        <div className="section-heading">
          <span>WHO WE ARE</span>
          <h2>Learn From Industry Professionals</h2>
        </div>

        <div className="intro-content">
          <p>
            SkillForge is a professional training institute dedicated to
            helping students develop practical skills for today's
            technology-driven world.
          </p>

          <p>
            Our courses combine practical projects, expert instruction
            and real-world knowledge so students can confidently apply
            what they learn.
          </p>
        </div>

      </section>


      {/* Featured Courses */}
      <section className="featured section">

        <div className="section-heading center">
          <span>OUR COURSES</span>
          <h2>Featured Courses</h2>
          <p>
            Learn the skills employers are looking for.
          </p>
        </div>

        <div className="courses-grid">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>

        <div className="view-all">
          <button
            className="secondary-button"
            onClick={() => navigate('/courses')}
          >
            View All Courses →
          </button>
        </div>

      </section>


      {/* Why Choose Us */}
      <section className="why-us section">

        <div className="section-heading center">
          <span>WHY SKILLFORGE</span>
          <h2>Why Students Choose Us</h2>
        </div>

        <div className="benefits-grid">

          <div className="benefit-card">
            <div className="benefit-icon">👨‍🏫</div>
            <h3>Expert Instructors</h3>
            <p>
              Learn directly from experienced professionals who
              understand the industry.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💻</div>
            <h3>Practical Learning</h3>
            <p>
              Work on practical projects that help turn knowledge
              into real-world skills.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🎯</div>
            <h3>Career Focused</h3>
            <p>
              Our courses are designed around valuable skills
              needed in today's job market.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🏆</div>
            <h3>Quality Education</h3>
            <p>
              Get structured learning and guidance throughout
              your educational journey.
            </p>
          </div>

        </div>

      </section>


      {/* Statistics */}
      <section className="stats">

        <div className="stats-container">

          <div className="stat">
            <h2>5,000+</h2>
            <p>Students</p>
          </div>

          <div className="stat">
            <h2>25+</h2>
            <p>Courses</p>
          </div>

          <div className="stat">
            <h2>40+</h2>
            <p>Instructors</p>
          </div>

          <div className="stat">
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>

        </div>

      </section>


      {/* Call To Action */}
      <section className="cta section">

        <div className="cta-content">
          <span>READY TO START?</span>

          <h2>
            Your Future Starts With
            <br />
            The Right Skills
          </h2>

          <p>
            Explore our courses and take the first step toward
            achieving your career goals.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate('/courses')}
          >
            Start Learning Today →
          </button>
        </div>

      </section>

    </div>
  )
}

export default Home