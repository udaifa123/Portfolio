function Skills() {
  return (
    <section id="skills">
      <div className="label">Expertise</div>

      <div className="section-heading reveal">
        Skills &<br /><em>Technologies</em>
      </div>

      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-tile">
          <h3>Frontend</h3>
          <p>
            React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3,
            Tailwind CSS, Bootstrap
          </p>
        </div>

        {/* Backend */}
        <div className="skill-tile">
          <h3>Backend</h3>
          <p>
            Node.js, Express.js, REST APIs, JWT Authentication, Role-Based Access Control (RBAC)
          </p>
        </div>

        {/* Database */}
        <div className="skill-tile">
          <h3>Database</h3>
          <p>
            MongoDB, Mongoose, PostgreSQL, SQL (Joins, Queries, Normalization)
          </p>
        </div>

        {/* DevOps & Cloud */}
        <div className="skill-tile">
          <h3>DevOps & Cloud</h3>
          <p>
            Docker, Docker Compose, AWS (EC2, S3), GitHub Actions (CI/CD)
          </p>
        </div>

        {/* Tools */}
        <div className="skill-tile">
          <h3>Tools</h3>
          <p>
            Git, GitHub, Postman, Vercel, Render, VS Code
          </p>
        </div>

        {/* Concepts */}
        <div className="skill-tile">
          <h3>Concepts</h3>
          <p>
            Data Structures & Algorithms (DSA), System Design (Basics), MVC Architecture,
            Responsive Design, API Integration
          </p>
        </div>

        <div className="skill-tile">
  <h3>Deployment</h3>
  <p>Vercel, Render, AWS EC2, S3</p>
</div>

<div className="skill-tile">
  <h3>Testing / Debugging</h3>
  <p>Postman, API Testing, Debugging</p>
</div>
      </div>
    </section>
  );
}

export default Skills;