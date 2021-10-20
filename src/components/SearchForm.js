import React, { useState } from 'react' 
import { Form, FormGroup, Label, Input, Button } from 'reactstrap' 
import '../static/styles/SearchForm.css' 

const SearchForm = ({ updateSearchTerm }) => {
    // initialize INITIAL_STATE obj
    const INITIAL_STATE = {
        searchTerm: ''
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
        // if formData has a value use it, or return undefined
        const searchValue = formData.searchTerm ? formData.searchTerm : undefined 
        updateSearchTerm(searchValue) 
    }

    return (
        <Form inline onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="searchTerm"></Label>
                <Input 
                    id="searchTerm"
                    type="text"
                    name="searchTerm"
                    placeholder="Enter search term..."
                    value={formData.searchTerm} 
                    onChange={handleChange}
                />
            </FormGroup>
            <Button className="btn-submit" color="primary">Submit</Button>{' '}
        </Form>
    )
}

export default SearchForm 