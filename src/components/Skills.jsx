function Skills() {
  return (
    <section id="skills">
      <div className="label">Expertise</div>
      <div className="section-heading reveal">
        Skills &<br /><em>Technologies</em>
      </div>
      <div className="skills-grid">
        <div className="skill-tile">
          <h3>Frontend</h3>
          <p>React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3</p>
        </div>
        <div className="skill-tile">
          <h3>Backend</h3>
          <p>Node.js, Express.js, TypeScript, REST APIs</p>
        </div>
        <div className="skill-tile">
          <h3>Database</h3>
          <p>MongoDB, Mongoose</p>
        </div>
        <div className="skill-tile">
          <h3>Tools</h3>
          <p>Git, GitHub, Postman, JSON Server, Docker, Docker Compose, GitHub Actions</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;