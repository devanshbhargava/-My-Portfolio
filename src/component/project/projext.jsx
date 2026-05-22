import "./project.css";
const Project = () => {
    const projects = [
        {
      title: "TaskFlow To-Do App",
      description:
        "Task management web app with add, delete and update task features using local storage.",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/devanshbhargava/Taskflow-project",
    },
    {
      title: "Personal Portfolio",
      description:
        "Responsive portfolio website built using React to showcase skills and projects.",
      tech: "React • CSS",
      github: "https://github.com/devanshbhargava",
    },
    ];
    return (
        <section className = "project" id = "project">
            <div className="project-container">
                <h2>Projects</h2>
                <p className = "project-subtitle">
                    Some projects I have built and worked on.
                </p>
                <div className = "project-grid">
                    {projects.map((project,index) => (
                        <div className = "project-card" key = {index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <span>{project.tech}</span>
                            <a 
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            >
                                view project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

};
export default Project;