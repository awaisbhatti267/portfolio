import './testimonial.css'
import profile from '../../assets/awais4.webp'

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonials">

      <div className="testimonial-title" data-animate>
        <h5>What Clients Say</h5>
        <h2>Testimonials</h2>
      </div>

      <div className="testimonial-container">

        <div className="testimonial-card" data-animate>
          <img src={profile} alt="client" />
          <h3>John Smith</h3>
          <span>Frontend Client</span>
          <p>Awais delivered an outstanding modern UI with smooth animations and responsive design. Highly recommended for React projects.</p>
        </div>

        <div className="testimonial-card" data-animate>
          <img src={profile} alt="client" />
          <h3>Michael Brown</h3>
          <span>Backend Client</span>
          <p>Excellent Python and API development skills. Communication and project delivery were professional and fast.</p>
        </div>

        <div className="testimonial-card" data-animate>
          <img src={profile} alt="client" />
          <h3>Sarah Wilson</h3>
          <span>UI/UX Client</span>
          <p>Beautiful portfolio quality design with modern interactions and premium user experience throughout the application.</p>
        </div>

      </div>

    </section>
  )
}

export default Testimonial
