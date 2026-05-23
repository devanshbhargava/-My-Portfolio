import "./skill.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming</h3>
            <p>Python, JavaScript</p>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML, CSS, React, Vite</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Express.js</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MongoDB</p>
          </div>

          <div className="skill-card">
            <h3>Core Concepts</h3>
            <p>DSA, OOPs, Problem Solving</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;