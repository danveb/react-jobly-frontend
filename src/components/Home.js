import React from 'react' 
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap' 
import '../static/styles/Home.css'

const Home = () => {
    return (
        <div>
            <Container className="themed-container">
                <h1>Jobly</h1>
                <p>All the jobs in one, convenient place.</p>
                <Button color="primary">Log In</Button>{' '}
                <Button color="primary">Sign Up</Button>{' '}
            </Container>

            
        </div>
    )
}

export default Home 