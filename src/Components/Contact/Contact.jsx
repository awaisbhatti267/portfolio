import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import {
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
  FaLinkedin, FaGithub, FaFacebook
} from 'react-icons/fa'
import './contact.css'

const Contact = () => {
  const formRef = useRef()
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      'service_fup6q4y',
      'template_g3425wm',
      formRef.current,
      'rX5p-CFRziMo1OcE0'
    )
    .then(() => {
      setStatus('success')
      formRef.current.reset()
    })
    .catch(() => {
      setStatus('error')
    })
  }

  return (
    <section className="contact" id="contact">

      <div className="contact-title" data-animate>
        <h5>Contact Me</h5>
        <h2>Let's Work Together</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info" data-animate>

          <div className="contact-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>awaisxbhatti@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+92 325 4008944</p>
            </div>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Lahore, Pakistan</p>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/muhammadawaisbhatti/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/awaisbhatti267" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.facebook.com/awais.gaming.311/" target="_blank" rel="noreferrer"><FaFacebook /></a>
          </div>

        </div>

        <form ref={formRef} className="contact-form" data-animate onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
          />

          {status === 'success' && (
            <p className="form-success">✓ Message sent! I'll get back to you soon.</p>
          )}

          {status === 'error' && (
            <p className="form-error">✗ Something went wrong. Please try again.</p>
          )}

          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact
