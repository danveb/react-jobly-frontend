import React, { useState } from 'react' 
import { useHistory } from 'react-router'
import { Form, Button } from 'react-bootstrap' 
import '../static/styles/LoginForm.css' 

const LoginForm = ({ props }) => {
    const history = useHistory() 

    // initialize INITIAL_STATE obj
    const INITIAL_STATE = {
        username: '', 
        password: '',
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
        await props.handleLogin(formData) 
        history.push('/') 
    }

    return (
        <Form className="LoginForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <h3>Log In</h3> 
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
                <Button type="submit" className="btn-submit" variant="primary">Log In</Button>{' '}
            </Form.Group>
        </Form>
    )
}

export default LoginForm 