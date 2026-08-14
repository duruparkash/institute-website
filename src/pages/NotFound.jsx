import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="error-page">

      <div className="error-content">

        <span className="error-number">
          404
        </span>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you're looking for doesn't exist or
          may have been moved.
        </p>

        <div className="error-buttons">

          <button
            className="primary-button"
            onClick={() => navigate('/')}
          >
            Go Home
          </button>

          <button
            className="secondary-button"
            onClick={() => navigate('/courses')}
          >
            Browse Courses
          </button>

        </div>

      </div>

    </section>
  )
}

export default NotFound