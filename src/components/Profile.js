import React, { useState, useContext } from 'react' 
import { Redirect } from 'react-router-dom'
import UserContext from '../UserContext'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap' 
// import '../static/styles/Profile.css' 

const Profile = ({ props }) => {
    const user = useContext(UserContext) 
    const [formData, setFormData] = useState(user)

    const handleChange = (e) => {
        // destructure {} = e.target
        const { name, value } = e.target 
        setFormData(formData => ({
            ...formData, 
            [name]: value 
        }))
        console.log('Changing!') 
    }

    const handleSubmit = async (e) => {
        e.preventDefault() 
        await props.updateProfile(formData) 
        setFormData({
            ...formData, 
            password: ''
        })
        document.getElementById('password').value = ''
    }

    return user.username ? (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <h3>Profile</h3> 
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

                {/* Confirm password to make changes */}
                <FormGroup>
                    <Label htmlFor="password">Enter password to update:</Label>
                    <Input 
                        id="password" 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Button className="btn-submit" color="primary">Save Changes</Button>{' '}
                </FormGroup>
            </Form>
        </div>
    ) : (
        <Redirect to="/"></Redirect>
    )
}

export default Profile 

