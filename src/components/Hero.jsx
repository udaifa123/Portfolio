import profilePic from '../assets/pic1.png';
import resumePDF from '../assets/Udaifa_KK_Full_Stack_Developer_Resume.pdf';

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
          Full Stack Developer (MERN + TypeScript) focused on building scalable,
          high-performance web applications. Experienced in REST APIs, authentication systems,
          and modern frontend architecture using React.
        </p>
        <div className="hero-cta-row">
          <a href={resumePDF} download className="btn-primary">
            <span>Download Resume</span>
          </a>
          <a href="#work" className="btn-outline" onClick={(e) => handleNavClick(e, 'work')}>
            View Projects
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img-frame">
          <img src={profilePic} alt="Udaifa" />
          <div className="hero-badge">MERN<br />STACK<br />DEV</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;