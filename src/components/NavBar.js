import React, { useContext } from 'react' 
import UserContext from '../UserContext'
import '../static/styles/NavBar.css'
import { Navbar, Nav } from 'react-bootstrap' 
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
    const user = useContext(UserContext) 

    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand className="text-primary">Jobly</Navbar.Brand>
            </LinkContainer>

            {user && user.username ? (
                <Nav className="mr-auto" navbar>
                    <LinkContainer to="/companies">
                        <Nav.Link>Companies</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/jobs">
                        <Nav.Link>Jobs</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/profile">
                        <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/logout">
                        <Nav.Link>Logout</Nav.Link>
                    </LinkContainer>
                </Nav>

            ) : (
                <Nav className="mr-auto" navbar>
                    <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                        <Nav.Link>Signup</Nav.Link>
                    </LinkContainer>
                </Nav>
            )}
            
        </Navbar>
    )
}

export default NavBar 