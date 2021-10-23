import React, { useState, useContext } from 'react' 
import { Redirect } from 'react-router-dom'
import UserContext from '../UserContext'
import { Form, Button } from 'react-bootstrap' 
import '../static/styles/Profile.css' 

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
            <Form className="Profile" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <h3>Profile</h3> 
                    <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control 
                        id="username" 
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        readOnly
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

                {/* Confirm password to make changes */}
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="password">Enter password to update:</Form.Label>
                    <Form.Control 
                        id="password" 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Button type="submit" className="btn-submit" variant="primary">Save Changes</Button>{' '}
                </Form.Group>
            </Form>
        </div>
    ) : (
        <Redirect to="/"></Redirect>
    )
}

export default Profile 

