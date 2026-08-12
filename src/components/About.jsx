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
            I am a MERN Stack Developer with hands-on experience building full-stack web
            applications using MongoDB, Express.js, React.js, and Node.js.
          </p>
          <p>
            I focus on creating scalable backend systems, responsive frontend interfaces, and
            secure authentication systems. I enjoy solving real-world problems and building
            projects that deliver real user value.
          </p>
          <p>Currently looking for opportunities as a Full Stack (MERN) Developer.</p>
          <div className="about-info-grid">
            <div className="info-item">
              <div className="info-label">Location</div>
              <div className="info-value">Kannur, Alakode, Nellikkunnu</div>
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
              <div className="info-value">Open to Opportunities</div>
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