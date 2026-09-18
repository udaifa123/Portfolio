import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const btn = formRef.current.querySelector('.btn-submit span');

    emailjs.sendForm(
      'service_udaifa',
      'template_rcko2g8',
      formRef.current,
      'y_AtIVbdLcypt1SyF'
    ).then(
      () => {
        btn.textContent = 'Message Sent!';
        setTimeout(() => {
          btn.textContent = 'Send Message';
          formRef.current.reset();
        }, 3000);
      },
      (error) => {
        console.error(error);
        btn.textContent = 'Error!';
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
          <p>
            Actively seeking entry-level or junior developer roles.
            Available for immediate joining.
          </p>

          <div className="contact-item">
            <strong>Email:</strong> udaifakk509@gmail.com
          </div>

          <div className="contact-item">
            <strong>Phone:</strong> +91 7306353312
          </div>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>

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