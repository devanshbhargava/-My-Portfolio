import "./navbar.css"
function Navbar(){
    return(
        <nav className="navbar">

            <h2 className="logo">Devansh Bhargava</h2>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skill</a></li>
                <li><a href="#">projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navbar