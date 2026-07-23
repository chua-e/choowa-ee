import {Link} from "react-router-dom";

export default function Navbar() {
    return(
        <nav className='nav'>
            <Link to='/choowa-ee/'>My site :)</Link>
            <ul>
                <li><Link to='/choowa-ee/'>About</Link></li>
                <li><Link to="/choowa-ee/resume">Resume</Link></li>
                <li><Link to="/choowa-ee/sampleworks">Sample work</Link></li> 
                <li><Link to="/choowa-ee/references">References</Link></li>
            </ul>
        </nav>
    )
}