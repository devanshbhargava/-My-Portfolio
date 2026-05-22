import "./skill.css"
const skill = () => {
    const skills = [
       "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "DSA",
        "Git & GitHub",
    ]
    return(
        <section className="skills" id="skills">
            <div className="skills-container">
                <h2>Skills</h2>
                <p className="skills-subtitle">
                    Technologies and tools I am currently learning and working with.
                </p>
                <div className="skill-grid">
                    {skills.map((skill,index) =>(
                        <div className="skill-card" key={index}>
                            {skill}
                        </div>


                    ))}
                </div>
            </div>
        </section>
    );
};
export default skill;
