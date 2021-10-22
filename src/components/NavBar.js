import React, { useContext } from 'react' 
import UserContext from '../UserContext'
import '../static/styles/NavBar.css'
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'

const NavBar = () => {
    const user = useContext(UserContext) 

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand className="text-primary" tag={Link} to="/">Jobly</NavbarBrand>

                {user && user.username ? (
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/companies">Companies</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/jobs">Jobs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/profile">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/logout">Logout</NavLink>
                        </NavItem>
                    </Nav>

                ) : (
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/signup">Signup</NavLink>
                        </NavItem>
                    </Nav>
                )}
                
            </Navbar>
        </div>
    )
}

export default NavBar 