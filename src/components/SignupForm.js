import React, { useState } from 'react' 

const SignupForm = () => {

    // initialize INITIAL_STATE obj
    const INITIAL_STATE = {
        username: '', 
        password: '',
        firstName: '', 
        lastName: '', 
        email: '' 
    }
    // formData, setFormData = useState
    const [formData, setFormData] = useState(INITIAL_STATE)

    return (
        <div>
            <h3>Sign Up</h3>
            <form>
                <label htmlFor="username">Username</label>
                <input 
                    id="username" 
                    type="text"
                    name="username"
                    placeholder="Name"
                    value={formData.username}
                    onChange={handleChange}
                />


            </form>
        </div>
    )
}

export default SignupForm 