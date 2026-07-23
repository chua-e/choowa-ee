import {Link} from "react-router-dom";

export default function Navbar() {
    return(
        <nav className='nav'>
            <Link to='/'>My site :)</Link>
            <ul>
                <li><Link to='/'>About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/sampleworks">Sample work</Link></li> 
                <li><Link to="/references">References</Link></li>
            </ul>
        </nav>
    )
}