import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  return (
    <div className="contact-page">

      {/* Header */}
      <section className="page-header">
        <span>GET IN TOUCH</span>

        <h1>Let's Start a Conversation</h1>

        <p>
          Have a question about our courses? Send us a message
          and our team will be happy to help.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">

        {/* Contact Information */}
        <div className="contact-info">

          <span>CONTACT US</span>

          <h2>We'd Love to Hear From You</h2>

          <p>
            Whether you want to learn more about our courses,
            instructors or enrollment process, feel free to
            reach out to us.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">📍</div>

              <div>
                <h3>Address</h3>
                <p>Karachi, Pakistan</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>

              <div>
                <h3>Phone</h3>
                <p>+92 300 1234567</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>

              <div>
                <h3>Email</h3>
                <p>info@skillforge.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕐</div>

              <div>
                <h3>Working Hours</h3>
                <p>Monday - Saturday, 9 AM - 6 PM</p>
              </div>
            </div>

          </div>

        </div>


        {/* Contact Form */}
        <div className="contact-form-container">

          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been submitted.
            </div>
          )}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>


            <div className="form-row">

              <div className="form-group">
                <label htmlFor="phone">
                  Phone
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>


            <button
              type="submit"
              className="primary-button submit-button"
            >
              Send Message →
            </button>

          </form>

        </div>

      </section>

    </div>
  )
}

export default Contact