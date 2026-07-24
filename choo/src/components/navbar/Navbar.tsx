import {Link, NavLink} from "react-router-dom";

export default function Navbar() {
    return(
        <nav className='nav'>
            <Link to='/choowa-ee/'>achoo</Link>
            <ul>
                <li><NavLink to='/choowa-ee/' end>About</NavLink></li>
                <li><NavLink to="/choowa-ee/resume">Resume</NavLink></li>
                <li><NavLink to="/choowa-ee/sampleworks">Sample Work</NavLink></li> 
                <li><NavLink to="/choowa-ee/references">References</NavLink></li>
            </ul>
        </nav>
    )
}