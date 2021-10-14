import React, { useState } from 'react' 
import { Form, FormGroup, Label, Input, Button } from 'reactstrap' 
import '../static/styles/SearchForm.css' 


const SearchForm = () => {
    // initialize INITIAL_STATE obj
    const INITIAL_STATE = {
        search: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE) 

    const handleChange = (e) => {
        // { name, val } e.target
        const { name, value } = e.target 
        setFormData(formData => ({
            ...formData, 
            [name]: value 
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log('submitted') 
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor="search"></Label>
            <FormGroup>
            <Input 
                id="search"
                type="text"
                name="search"
                placeholder="Enter search term..."
                value={formData.value} 
                onChange={handleChange}
            
            />
            </FormGroup>

            <FormGroup>
                <Button className="btn-submit" color="primary">Submit</Button>{' '}
            </FormGroup>
        </Form>
    )
}

export default SearchForm 