import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Devansh Bhargava</h3>

        <p>
          Built with React and passion for web development.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/devanshbhargava"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/devansh-bhargava-29a5b4281"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:bhargavadevansh85@gmail.com">
            Email
          </a>
        </div>

        <span>
          © 2026 Devansh Bhargava. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;