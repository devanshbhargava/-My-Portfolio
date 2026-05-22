import "./about.css";
const about = () => {
    return (
    <section className="about" id="about">
        <div className="about container">
            <div className="about-left">
                <h2>About Me</h2>
                <p>
                Hi, I'm <span>Devansh Bhargava</span>, a BTech CSE-AIML student
                passionate about web development and programming.
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
                    <p>B.Tech in Computer Science and Engineering (AIML)</p>
                    <p>Oriental College of Technology, Bhopal</p>
                </div>
                <div className="about-card">
                    <h3>Current Focus</h3>
                    <p>React • DSA • Full Stack Development</p>
                </div>

            </div>
        </div>

    </section>
    )
}
export default about;
