import "./hero.css"
function Hero(){
    return(
        <section className = "hero">
            <div className="hero-text">
                <h1>Hi, I'm Devansh Bhargava</h1>
                <h3>Web Developer | Python Learner</h3>
                    
                <p>
                    BTech CSE-AIML student passionate
                    about web development and
                    programming.
                </p>
                <div className="hero-btn">
                <button className="btn">Contact Me</button>
                <button className="btn-outline">Download resume</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="https://plus.unsplash.com/premium_vector-1711987810156-4793e4aa786e?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="developer illustration" 
                />
            </div>
        </section>
    )
}
export default Hero