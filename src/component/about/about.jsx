import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-left">
          <h2>About Me</h2>

          <p>
            Hi, I'm <span>Devansh Bhargava</span>, a B.Tech CSE (AI & ML)
            student passionate about web development and programming.
          </p>

          <p>
            I enjoy building responsive websites, learning DSA, and exploring
            modern technologies. Currently, I am improving my development
            skills and preparing for placements.
          </p>

          <p>
            My goal is to become a skilled software developer and build
            impactful projects.
          </p>
        </div>

        <div className="about-right">

          <div className="about-card">
            <h3>Education</h3>

            <p>
              <strong>B.Tech – CSE (AI & ML)</strong><br />
              Oriental College of Technology, Bhopal<br />
              2023 – 2027 | CGPA: 6.63
            </p>

            <p>
              <strong>Class 12th (PCM)</strong><br />
              MP Board – 71.4% | 2023
            </p>

            <p>
              <strong>Class 10th</strong><br />
              MP Board – 70% | 2021
            </p>
          </div>

          <div className="about-card">
            <h3>Current Focus</h3>
            <p>React • DSA • Full Stack Development</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;