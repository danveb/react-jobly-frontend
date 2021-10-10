import React from "react"
// import "../static/styles/NavBar.css"
import { Link } from "react-router-dom"
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar color="light" light expand="lg">
                <NavbarBrand tag={Link} exact to="/">Jobly</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink tag={Link} exact to="/companies">Companies</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} exact to="/jobs">Jobs</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} exact to="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} exact to="/profile">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} exact to="/signup">Signup</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar 