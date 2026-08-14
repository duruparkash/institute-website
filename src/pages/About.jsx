import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()
  const reasons = [
    {
      icon: '🎓',
      title: 'Practical Education',
      description:
        'Our courses focus on practical skills and real-world projects rather than theory alone.',
    },
    {
      icon: '👨‍🏫',
      title: 'Experienced Instructors',
      description:
        'Learn from professionals who bring real industry experience into the classroom.',
    },
    {
      icon: '💻',
      title: 'Modern Curriculum',
      description:
        'Our curriculum is designed around modern technologies and skills that are relevant today.',
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description:
        'We help students develop the confidence and skills needed to move toward their career goals.',
    },
  ]

  return (
    <div className="about-page">

      {/* Page Header */}
      <section className="page-header">
        <span>ABOUT SKILLFORGE</span>

        <h1>Building Skills. Creating Futures.</h1>

        <p>
          We are committed to providing high-quality, practical
          education that prepares students for the modern world.
        </p>
      </section>


      {/* About Institute */}
      <section className="about-intro section">

        <div className="about-intro-content">
          <span>WHO WE ARE</span>

          <h2>
            A Place Where Learning Meets Opportunity
          </h2>

          <p>
            SkillForge is a professional training institute focused
            on helping students build practical and career-oriented
            skills.
          </p>

          <p>
            We believe that education should go beyond textbooks.
            That's why our programs combine expert instruction,
            hands-on practice and real-world projects.
          </p>

          <p>
            Whether you're starting your journey or looking to
            improve your existing skills, SkillForge provides an
            environment where you can learn, practice and grow.
          </p>
        </div>

        <div className="about-highlight">
          <div className="about-highlight-icon">
            🎯
          </div>

          <h3>Our Goal</h3>

          <p>
            To make quality, practical education accessible to
            students and aspiring professionals.
          </p>
        </div>

      </section>


      {/* Mission & Vision */}
      <section className="mission-vision section">

        <div className="section-heading center">
          <span>OUR PURPOSE</span>

          <h2>Mission & Vision</h2>
        </div>

        <div className="mission-grid">

          <div className="mission-card">
            <div className="mission-icon">
              🎯
            </div>

            <h3>Our Mission</h3>

            <p>
              Our mission is to empower students with practical,
              industry-relevant skills through quality education,
              experienced instructors and hands-on learning.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              🔭
            </div>

            <h3>Our Vision</h3>

            <p>
              Our vision is to become a trusted learning community
              where students can discover their potential and
              confidently build successful careers.
            </p>
          </div>

        </div>

      </section>


      {/* Statistics */}
      <section className="about-stats">

        <div className="about-stats-container">

          <div className="about-stat">
            <h2>5,000+</h2>
            <p>Students Trained</p>
          </div>

          <div className="about-stat">
            <h2>25+</h2>
            <p>Professional Courses</p>
          </div>

          <div className="about-stat">
            <h2>40+</h2>
            <p>Expert Instructors</p>
          </div>

          <div className="about-stat">
            <h2>10+</h2>
            <p>Years of Experience</p>
          </div>

        </div>

      </section>


      {/* Why Students Choose Us */}
      <section className="section why-students">

        <div className="section-heading center">
          <span>WHY CHOOSE US</span>

          <h2>Why Students Choose SkillForge</h2>

          <p>
            Everything we do is designed to help students learn
            effectively and move forward with confidence.
          </p>
        </div>

        <div className="reasons-grid">

          {reasons.map((reason) => (
            <div
              className="reason-card"
              key={reason.title}
            >
              <div className="reason-icon">
                {reason.icon}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>
            </div>
          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="section about-cta">

        <div className="about-cta-content">

          <div>
            <span>START YOUR JOURNEY</span>

            <h2>
              Ready to Build Your Future?
            </h2>

            <p>
              Explore our courses and start learning skills that
              can make a difference in your career.
            </p>
          </div>

         <button
  className="primary-button"
  onClick={() => navigate('/courses')}
>
  Explore Courses →
</button>

        </div>

      </section>

    </div>
  )
}

export default About