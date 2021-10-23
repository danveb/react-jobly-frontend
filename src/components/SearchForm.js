import React, { useState } from 'react' 
import { Form, InputGroup, Button } from 'react-bootstrap' 
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
        <Form className="SearchForm" onSubmit={handleSubmit}>
            <InputGroup>
                <Form.Control
                    id="searchTerm"
                    type="text"
                    name="searchTerm"
                    placeholder="Enter search term..."
                    value={formData.searchTerm} 
                    onChange={handleChange}
                />
                <Button type="submit" variant="primary">Submit</Button>
            </InputGroup>
        </Form>
    )
}

export default SearchForm 