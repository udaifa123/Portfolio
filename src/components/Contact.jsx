import emailjs from 'emailjs-com';

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_udaifa',     // replace
      'template_36luc06',    // replace
      e.target,
      'y_AtIVbdLcypt1SyF'      // replace
    ).then(
      () => {
        const btn = e.target.querySelector('.btn-submit span');
        btn.textContent = 'Message Sent!';
        setTimeout(() => {
          btn.textContent = 'Send Message';
          e.target.reset();
        }, 3000);
      },
      (error) => {
        alert('Failed to send message. Try again.');
        console.error(error);
      }
    );
  };

  return (
    <section id="contact">
      <div className="label">Get In Touch</div>

      <div className="section-heading reveal">
        Let's <em>Work</em><br />Together
      </div>

      <div className="contact-grid reveal">

        <div className="contact-info">
          <h3>Open to Full Stack Developer opportunities</h3>
          <p>Actively seeking entry-level or junior developer roles. Available for immediate joining.</p>

          <div className="contact-item">
            <strong>Email:</strong> udaifakk509@gmail.com
          </div>

          <div className="contact-item">
            <strong>Phone:</strong> +91 7306353312
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
  
  <input type="text" name="name" placeholder="Your Name" required />
  
  <input type="email" name="email" placeholder="Your Email" required />
  
  <input type="text" name="subject" placeholder="Subject" />
  
  <textarea name="message" placeholder="Message" required></textarea>

  <button type="submit" className="btn-submit">
    <span>Send Message</span>
  </button>

</form>

      </div>
    </section>
  );
}

export default Contact;