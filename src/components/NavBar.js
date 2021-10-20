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
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand className="text-primary" tag={Link} to="/">Jobly</NavbarBrand>
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
                        <NavLink tag={Link} to="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/signup">Signup</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar 