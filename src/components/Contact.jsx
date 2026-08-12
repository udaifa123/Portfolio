// import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit span');
    btn.textContent = 'Message Sent!';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="contact">
      <div className="label">Get In Touch</div>
      <div className="section-heading reveal">
        Let's <em>Work</em>
        <br />Together
      </div>
      <div className="contact-grid reveal">
        <div className="contact-info">
          <h3>Open to Full Stack Developer opportunities</h3>
          <p>Actively seeking entry-level or junior developer roles. Available for immediate joining.</p>
          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-item-text">
              <strong>Address</strong>
              <span>
                Cheriyantintakath House, Nellikkunnu,<br />Pathanpara, Kannur – 670571
              </span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-item-text">
              <strong>Email</strong>
              <p>
                Email: <a href="mailto:udaifakk509@gmail.com">udaifakk509@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-item-text">
              <strong>Phone</strong>
              <p>
                Phone: <a href="tel:+917306353312">+91 7306353312</a>
              </p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field-wrap">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="field-wrap">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="field-wrap">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="What's this about?" />
          </div>
          <div className="field-wrap">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Tell me about your project..." required></textarea>
          </div>
          <button type="submit" className="btn-submit">
            <span>Send Message</span>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;