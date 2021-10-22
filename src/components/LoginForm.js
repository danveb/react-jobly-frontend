import React, { useState } from 'react' 
import { useHistory } from 'react-router'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap' 
import '../static/styles/LoginForm.css' 

const LoginForm = ({ props }) => {
    const history = useHistory() 

    // initialize INITIAL_STATE obj
    const INITIAL_STATE = {
        username: 'test_user', 
        password: 'testtest',
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
        <div>
            <Form onSubmit={handleSubmit}>
                <h3>Log In</h3>
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
                    <Button className="btn-submit" color="primary">Log In</Button>{' '}
                </FormGroup>
            </Form>
        </div>
    )
}

export default LoginForm 