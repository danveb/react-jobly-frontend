import React, { useContext } from 'react' 
import UserContext from '../UserContext'
import { Link } from 'react-router-dom'
import { Container, Button } from 'reactstrap'
import '../static/styles/Home.css'

const Home = () => {
    const user = useContext(UserContext)
    
    return (
        <div>
            <Container className="themed-container">
                {/* ternary operator for displaying welcome message or login/signup page */}
                { user && user.username ? (
                    <>
                    <h1>Welcome Back {user.firstName[0].toUpperCase().concat(user.firstName.slice(1).concat('!'))}</h1>
                    </>
                ) : (
                    <>
                    <h1>Jobly</h1>
                    <p>All the jobs in one, convenient place.</p>
                    <Button color="primary" tag={Link} to="/login">Log In</Button>{' '}
                    <Button color="primary" tag={Link} to="/signup">Sign Up</Button>{' '}
                    </>
                )}
            </Container>
        </div>
    )
}

export default Home 