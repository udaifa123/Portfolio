import profilePic from '../assets/pic1.png';
import resumePDF from '../assets/Udaifa_KK_FullStack_Developer_Resume.pdf';

function Hero() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="line-accent"></div>
      <div className="hero-left">
        <div className="hero-eyebrow">Available for Work</div>
        <h1 className="hero-name">
          Hello,<br />I'm <em>Udaifa</em>
        </h1>
<p className="hero-subtitle">
  Full Stack Developer focused on building scalable, production-ready web applications using Next.js and MERN stack. Skilled in REST API development, authentication systems, SQL & PostgreSQL, Docker-based deployments, and AWS cloud infrastructure.
</p>
       <div className="hero-cta-row">
  <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="btn-primary">
    <span>View Resume</span>
  </a>

  <a href={resumePDF} download className="btn-outline">
    Download
  </a>

  <a href="#work" className="btn-outline" onClick={(e) => handleNavClick(e, 'work')}>
    View Projects
  </a>
</div>
      </div>
      <div className="hero-right">
        <div className="hero-img-frame">
          <img src={profilePic} alt="Udaifa" />
<div className="hero-badge">NEXT.js<br />MERN<br />DEV</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;