import React, { useContext } from 'react' 
import UserContext from '../UserContext'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Button } from 'react-bootstrap'
import '../static/styles/Home.css'

const Home = () => {
    const user = useContext(UserContext)
    
    return (
        <Container className="Home">
            {/* ternary operator for displaying welcome message or login/signup page */}
            { user && user.username ? (
                <>
                <h1>Jobly</h1>
                <p>All the jobs in one, convenient place.</p>
                <h1 className="Home-welcome">Welcome {user.firstName[0].toUpperCase().concat(user.firstName.slice(1).concat('!'))}</h1>
                </>
            ) : (
                <>
                <h1>Jobly</h1>
                <p>All the jobs in one, convenient place.</p>
                <p>
                    <LinkContainer to="/login">
                        <Button variant="primary">Log In</Button>
                    </LinkContainer>
                </p>
                <p>
                    <LinkContainer to="/signup">
                        <Button variant="primary">Sign Up</Button>
                    </LinkContainer> 
                </p>
                </>
            )}
        </Container>
    )
}

export default Home 