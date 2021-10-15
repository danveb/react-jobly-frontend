import React, { useState } from 'react'

const useSearchTerm = (initialValue) => {
    const [searchTerm, setSearchTerm] = useState(initialValue) 

    const updateSearchTerm = (searchValue) => {
        setSearchTerm(searchValue)
    }

    return [searchTerm, updateSearchTerm]
}

export default useSearchTerm 