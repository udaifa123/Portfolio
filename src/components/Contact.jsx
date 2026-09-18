import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

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
      <style>{`
        #contact {
          background: #f6f1e7;
          padding: 100px 80px;
          font-family: 'Georgia', 'Times New Roman', serif;
          color: #2a2a2a;
        }

        #contact .label {
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 13px;
          color: #b8935f;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          margin-bottom: 10px;
        }

        #contact .section-heading {
          font-size: 64px;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 50px;
        }

        #contact .section-heading em {
          font-style: italic;
          font-weight: 400;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 60px;
          align-items: start;
        }

        /* Left column */

        .contact-info h3 {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .contact-info > p {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 15px;
          color: #6b6b6b;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 28px;
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }

        .contact-icon {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #efe6d3;
          color: #c99a4a;
          border-radius: 4px;
        }

        .contact-item strong {
          display: block;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 1px;
          color: #9a9a9a;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .contact-item p {
          font-size: 15px;
          color: #2a2a2a;
          line-height: 1.4;
          margin: 0;
        }

        /* Right column: form */

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-field label {
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 1.5px;
          color: #b8935f;
          font-weight: 600;
        }

        .contact-form input,
        .contact-form textarea {
          background: #f0e9da;
          border: 1px solid #ddd0b5;
          border-radius: 2px;
          padding: 14px 16px;
          font-size: 15px;
          color: #2a2a2a;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #a8a094;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #c99a4a;
          background: #fbf8f0;
        }

        .contact-form textarea {
          min-height: 150px;
          resize: vertical;
        }

        .btn-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 18px 32px;
          font-size: 14px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-weight: 600;
          cursor: pointer;
          align-self: flex-start;
          transition: background 0.2s ease;
        }

        .btn-submit:hover {
          background: #333;
        }

        @media (max-width: 900px) {
          #contact {
            padding: 60px 24px;
          }
          #contact .section-heading {
            font-size: 42px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

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
            <span className="contact-icon"><MapPin size={18} /></span>
            <div>
              <strong>Address</strong>
              <p>Cheriyantintakath House, Nellikkunnu,<br />Pathanpara, Kannur – 670571</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><Mail size={18} /></span>
            <div>
              <strong>Email</strong>
              <p>Email: udaifakk509@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><Phone size={18} /></span>
            <div>
              <strong>Phone</strong>
              <p>Phone: +91 7306353312</p>
            </div>
          </div>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-field">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
          </div>

          <div className="form-field">
            <label>Subject</label>
            <input type="text" name="subject" placeholder="What's this about?" />
          </div>

          <div className="form-field">
            <label>Message</label>
            <textarea name="message" placeholder="Tell me about your project..." required></textarea>
          </div>

          <button type="submit" className="btn-submit">
            <span>Send Message</span>
            <Send size={16} />
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;