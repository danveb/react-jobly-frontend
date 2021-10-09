import React from 'react' 
import { Container, Row, Col, Button } from 'reactstrap'
import '../static/styles/Home.css'

const Home = () => {
    return (
        <div>
            <Container className="themed-container">
                <h1>Jobly</h1>
                <p>All the jobs in one, convenient place.</p>
                <Button color="primary" href="/login">Log In</Button>{' '}
                <Button color="primary" href="/signup">Sign Up</Button>{' '}
            </Container>
            
        </div>
    )
}

export default Home 