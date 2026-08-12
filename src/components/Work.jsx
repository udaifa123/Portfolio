import shoosifieImg from '../assets/Shoosifie.png';
import zafafImg from '../assets/ZafaF.png';
import ilhamImg from '../assets/Ilham.png';

function Work() {
  return (
    <section id="work">
      <div className="label">Portfolio</div>
      <div className="section-heading reveal">
        Selected<br /><em>Work</em>
      </div>
      <div className="work-grid reveal">
        <div className="work-card">
          <div className="work-card-thumb">
            <img src={shoosifieImg} alt="Shoosifie Project" />
          </div>
          <div className="work-card-body">
            <h3>Shoosifie – E-Commerce Website</h3>
            <p>
              Built a responsive e-commerce application with product listing, cart system,
              and dynamic API integration. Implemented client-side state management and
              optimized UI for performance.
            </p>
            <p><strong>Tech:</strong> HTML, CSS, JavaScript</p>
            <a href="https://e-commerce-shoestore-shoosifie.vercel.app/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>

        <div className="work-card">
          <div className="work-card-thumb">
            <img src={zafafImg} alt="Zafaf Project" />
          </div>
          <div className="work-card-body">
            <h3>Zafaf – Perfume Store (Full Stack)</h3>
            <p>
              Built a full-stack web application with product management features.
              Developed REST APIs using Express and integrated MongoDB database.
            </p>
            <p><strong>Tech:</strong> React, Node.js, Express, MongoDB</p>
            <a href="https://node-frontend-project-zafa-f.vercel.app/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>

        <div className="work-card">
          <div className="work-card-thumb">
            <img src={ilhamImg} alt="Ilham Project" />
          </div>
          <div className="work-card-body">
            <h3>Ilham – Hostel Management System</h3>
            <p>
              Developed a role-based system with authentication for Admin, Student, Parent,
              and Warden. Features include attendance tracking, complaints, and dashboard.
            </p>
            <p><strong>Tech:</strong> MERN Stack</p>
            <a href="https://hostel-management-system-frontend-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>

        <div className="work-card">
  <div className="work-card-thumb">
    <img src={zafafImg} alt="Docker Project" />
  </div>
  <div className="work-card-body">
    <h3>Dockerized MERN Application</h3>
    <p>
      Containerized a full-stack MERN application using Docker and Docker Compose.
      Implemented multi-container setup for frontend and backend services.
      Integrated CI/CD pipeline using GitHub Actions for automated build and deployment.
    </p>
    <p><strong>Tech:</strong> Docker, Docker Compose, Node.js, React, GitHub Actions</p>

    <a href="https://github.com/udaifa123/ZafaF-perfume-store" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
    <br />
    <a href="https://hub.docker.com/r/udaifa/zafaf-frontend" target="_blank">
  Docker Frontend
</a>

<br />

<a href="https://hub.docker.com/r/udaifa/zafaf-backend" target="_blank">
  Docker Backend
</a>
  </div>
</div>
      </div>
    </section>
  );
}

export default Work;