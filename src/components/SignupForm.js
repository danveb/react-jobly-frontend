import React, { useState } from 'react' 
import { useHistory } from 'react-router' 
import { Form, Button } from 'react-bootstrap' 
import '../static/styles/SignupForm.css' 

const SignupForm = ({ props }) => {
    const history = useHistory() 

    // initialize INITIAL_STATE obj
    const INITIAL_STATE = {
        username: 'test_user', 
        password: 'testtest',
        firstName: 'test', 
        lastName: 'user', 
        email: 'test@test.com' 
    }

    // formData, setFormData = useState
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        // destructure {} = e.target
        const { name, value } = e.target 
        setFormData(formData => ({
            ...formData, 
            [name]: value 
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault() 
        await props.handleSignup(formData) 
        history.push('/') 
    }

    return (
        <Form className="SignupForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <h3>Sign Up</h3>
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control 
                    id="username" 
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control 
                    id="password" 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="firstName">First Name</Form.Label>
                <Form.Control 
                    id="firstName" 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="lastName">Last Name</Form.Label>
                <Form.Control 
                    id="lastName" 
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control 
                    id="email" 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Button className="btn-submit" variant="primary">Sign Up</Button>{' '}
            </Form.Group>
        </Form>
    )
}

export default SignupForm 