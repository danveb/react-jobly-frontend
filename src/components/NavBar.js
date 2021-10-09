import React from "react"
import "../static/styles/NavBar.css"
// import { NavLink } from "react-router-dom"
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {
    return (
        <div>
            <Nav>
                <NavItem>
                    <NavLink href="/">Jobly</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/companies">Companies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/jobs">Jobs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/signup">Signup</NavLink>
                </NavItem>
                {/* <NavItem>
                    <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem> */}
            </Nav>  
        </div>
    )
}

export default NavBar 