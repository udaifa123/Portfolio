import shoosifieImg from '../assets/Shoosifie.png';
import zafafImg from '../assets/ZafaF.png';
import ilhamImg from '../assets/Ilham.png';
import sqlImg from '../assets/sql-project.png';   // ADD THIS
import dockerImg from '../assets/ZafaF.png';     // ADD THIS (create image)

function Work() {
  return (
    <section id="work">
      <div className="label">Portfolio</div>
      <div className="section-heading reveal">
        Selected<br /><em>Work</em>
      </div>

      <div className="work-grid reveal">

        {/* PROJECT 1 */}
        <div className="work-card">
          <div className="work-card-thumb">
            <img src={shoosifieImg} alt="Shoosifie Project" />
          </div>
          <div className="work-card-body">
            <h3>Shoosifie – E-Commerce Website</h3>
            <p>
              Built a responsive e-commerce application with product listing, cart system,
              and dynamic API integration.
            </p>
            <p><strong>Tech:</strong> HTML, CSS, JavaScript</p>

            <a href="https://e-commerce-shoestore-shoosifie.vercel.app/" target="_blank">
              Live
            </a> | 
            <a href="https://github.com/udaifa123/shoosfie-shoestore" target="_blank">
              GitHub
            </a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="work-card">
          <div className="work-card-thumb">
            <img src={zafafImg} alt="Zafaf Project" />
          </div>
          <div className="work-card-body">
            <h3>Zafaf – Perfume Store (Full Stack)</h3>
            <p>
              Developed a full-stack web application with product management and backend APIs.
            </p>
            <p><strong>Tech:</strong> React, Node.js, Express, MongoDB</p>

            <a href="https://zafa-f-perfume-store.vercel.app/" target="_blank">
              Live
            </a> | 
            <a href="https://github.com/udaifa123/ZafaF-perfume-store" target="_blank">
              GitHub
            </a>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="work-card">
          <div className="work-card-thumb">
            <img src={ilhamImg} alt="Ilham Project" />
          </div>
          <div className="work-card-body">
            <h3>Ilham – Hostel Management System</h3>
            <p>
              Role-based system with authentication, dashboards, attendance, and complaints.
            </p>
            <p><strong>Tech:</strong> MERN Stack</p>

            <a href="https://hostel-management-system-frontend-ten.vercel.app/" target="_blank">
              Live
            </a> | 
            <a href="https://github.com/udaifa123/Hostel-Management-System-Backened" target="_blank">
              GitHub backend
            </a>
            <br />
            <a href="https://github.com/udaifa123/Hostel-Management-System-Frontend">
            GitHub frontend
            </a>
          </div>
        </div>

        {/* PROJECT 4 - DOCKER */}
        <div className="work-card">
          <div className="work-card-thumb">
            <img src={dockerImg} alt="Docker Project" />
          </div>
          <div className="work-card-body">
            <h3>Dockerized MERN Application</h3>
            <p>
              Containerized MERN app using Docker & Docker Compose with CI/CD pipeline.
            </p>
            <p><strong>Tech:</strong> Docker, Node.js, React, GitHub Actions</p>

            <a href="https://github.com/udaifa123/ZafaF-perfume-store" target="_blank">
              GitHub
            </a><br />

            <a href="https://hub.docker.com/r/udaifa/zafaf-frontend" target="_blank">
              Docker Frontend
            </a><br />

            <a href="https://hub.docker.com/r/udaifa/zafaf-backend" target="_blank">
              Docker Backend
            </a>
          </div>
        </div>

        {/* PROJECT 5 - SQL 🔥 */}
        <div className="work-card">
          <div className="work-card-thumb">
            <img src={sqlImg} alt="SQL Project" />
          </div>
          <div className="work-card-body">
            <h3>TeamFlow – SQL Project</h3>
            <p>
              Designed a PostgreSQL-based project management database with normalized schema
              and optimized queries.
            </p>

            <p><strong>Tech:</strong> PostgreSQL, SQL</p>

            <p>
              <strong>Concepts:</strong> Joins, CTEs, Views, Indexing, Constraints
            </p>

            <a href="https://github.com/udaifa123/Teamflow" target="_blank">
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Work;