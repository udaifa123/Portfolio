import aboutPic from '../assets/me.JPG';

function About() {
  return (
    <section id="about">
      <div className="label">About Me</div>

      <div className="section-heading reveal">
        The person<br />behind the <em>code</em>
      </div>

      <div className="about-grid reveal">
        <div className="about-img-wrap">
          <div className="about-img-inner">
            <img src={aboutPic} alt="Udaifa" />
          </div>
          <div className="about-img-caption">Kannur, Kerala</div>
        </div>

        <div className="about-text-block">
          <p>
            I am a Full Stack Developer specializing in the MERN stack and Next.js,
            with hands-on experience building scalable and production-ready web applications.
            I work with modern technologies including TypeScript, PostgreSQL, and REST APIs
            to develop efficient and maintainable systems.
          </p>

          <p>
            My focus is on building complete solutions — from responsive frontend interfaces
            to robust backend systems with secure authentication and role-based access control.
            I also have experience deploying applications using Docker and AWS, ensuring
            reliable and consistent performance in real-world environments.
          </p>

          <p>
            I enjoy solving real-world problems through code and continuously improving my
            skills by working on practical, end-to-end projects.
            Currently, I am actively seeking opportunities as a Full Stack Developer.
          </p>

          <div className="about-info-grid">
            <div className="info-item">
              <div className="info-label">Location</div>
              <div className="info-value">Kannur, Kerala, India</div>
            </div>

            <div className="info-item">
              <div className="info-label">Email</div>
              <div className="info-value">udaifakk509@gmail.com</div>
            </div>

            <div className="info-item">
              <div className="info-label">Phone</div>
              <div className="info-value">+91 7306353312</div>
            </div>

            <div className="info-item">
              <div className="info-label">Status</div>
              <div className="info-value">Available for Immediate Joining</div>
            </div>
          </div>

          <div className="social-row">
            <a
              href="https://www.linkedin.com/in/udaifa-k-k-777328394/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href="https://github.com/udaifa123"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;