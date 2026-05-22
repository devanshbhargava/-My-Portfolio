import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <h2>Contact Me</h2>

        <p className="contact-subtitle">
          Interested in working together or have any opportunity? Feel free to connect.
        </p>

        <div className="contact-cards">

          <a
            href="mailto:bhargavadevansh85@gmail.com"
            className="contact-card"
          >
            <h3>Email</h3>
            <p>bhargavadevansh85@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/devansh-bhargava-29a5b4281"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </a>

          <a
            href="https://github.com/devanshbhargava"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>GitHub</h3>
            <p>View my repositories</p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;