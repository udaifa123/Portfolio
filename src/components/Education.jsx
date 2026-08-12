function Education() {
  return (
    <section id="education">
      <div className="label">Background</div>
      <div className="section-heading reveal">
        Education &<br /><em>Journey</em>
      </div>
      <div className="edu-wrapper reveal">
        <div className="edu-item">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="edu-dot"></div>
            <div className="edu-year">2022</div>
          </div>
          <div className="edu-content">
            <h3>Plus Two Completed</h3>
            <p>
              Completed higher secondary education with a strong focus on computer science
              and mathematics, building a solid foundation for development work.
            </p>
            <span className="edu-badge">Grade: 92%</span>
          </div>
        </div>
        <div className="edu-item">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="edu-dot"></div>
            <div className="edu-year">Now</div>
          </div>
          <div className="edu-content">
            <h3>Full Stack Development — ZIAS</h3>
            <p>
              Enrolled in a comprehensive full stack development program at Zaitoon
              International Campus, Payyannur, mastering both front-end and back-end
              technologies to build complete web applications.
            </p>
            <span className="edu-badge">Expected: 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;