function Education() {
  return (
    <section id="education">
      <div className="label">Background</div>

      <div className="section-heading reveal">
        Education &<br /><em>Journey</em>
      </div>

      <div className="edu-wrapper reveal">

        {/* SCHOOL */}
        {/* SCHOOL */}
<div className="edu-item">
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className="edu-dot"></div>
    <div className="edu-year">2023</div>
  </div>

  <div className="edu-content">
    <h3>Higher Secondary Education (Commerce)</h3>

    <p>
      Completed higher secondary education with a focus on commerce and political science,
      developing strong analytical thinking, problem-solving, and decision-making skills.
    </p>

    <span className="edu-badge">Score: 89%</span>
  </div>
</div>

        {/* FULL STACK JOURNEY */}
        <div className="edu-item">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="edu-dot"></div>
            <div className="edu-year">2025</div>
          </div>

          <div className="edu-content">
            <h3>Full Stack Development Program — Zaitoon International Campus</h3>

            <p>
              Completed an intensive full stack development program focusing on MERN stack,
              Next.js, TypeScript, SQL, and modern web technologies.
            </p>

            <p>
              Built real-world projects including dashboards, authentication systems,
              and deployed applications using Docker and AWS.
            </p>

            <span className="edu-badge">Hands-on Training</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;