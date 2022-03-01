import React from 'react'
import { NavLink} from "react-router-dom"

class Header extends Component {
    render() {
        return (
            <nav>
                <h1 id='me'>Alisa Wolfram</h1>
                <ul className='header'>
                    <li>
                        <NavLink exact to="/">About</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/projects">Projects</NavLink>
                    </li>  <li>
                        <NavLink exact to="/resume">Resume</NavLink>
                    </li>  <li>
                        <NavLink exact to="/contact-me">Contact Me</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Header;