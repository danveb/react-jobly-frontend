import React, { useState } from 'react' 
import { useHistory } from 'react-router' 
import { Form, FormGroup, Label, Input, Button } from 'reactstrap' 
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
        <div>
            <Form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input 
                        id="username" 
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input 
                        id="password" 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                        id="firstName" 
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                        id="lastName" 
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        id="email" 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Button className="btn-submit" color="primary">Sign Up</Button>{' '}
                </FormGroup>
            </Form>
        </div>
    )
}

export default SignupForm 