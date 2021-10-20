import React, { useState } from 'react' 
import { Form, FormGroup, Label, Input, Button } from 'reactstrap' 
// import '../static/styles/Profile.css' 

const Profile = () => {

    // initialize INITIAL_STATE obj
    const INITIAL_STATE = {
        profile: '', 
        firstName: '',
        firstName: '', 
        lastName: '', 
        email: '' 
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
        console.log('Changing!') 
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log('Submitted!') 
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <h3>Profile</h3> 
                    <Label htmlFor="profile">Profile</Label>
                    <Input 
                        id="profile" 
                        type="text"
                        name="profile"
                        value={formData.profile}
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
                    <Button className="btn-submit" color="primary">Save Changes</Button>{' '}
                </FormGroup>
            </Form>
        </div>
    )
}

export default Profile 

