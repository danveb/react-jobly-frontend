import React, { useState } from 'react' 

const SearchForm = () => {
    // initialize INITIAL_STATE obj
    const INITIAL_STATE = {
        
    }
    const [formData, setFormData] = useState(INITIAL_STATE) 

    handleChange = (e) => {
        // { name, val } e.target
        const { name, val } = e.target 
        setFormData({
            ...formData, 
            [name]: val 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() 
    }

    return (
        <form>
            <label>Search Form</label>
            <input 
                type="text"
                name="search-form"
                value={formData.value} 
                placeholder="Enter search term..."
                onChange={handleChange}
            
            />
        </form>
    )
}

export default SearchForm 