import React, { useState, useEffect } from 'react' 
import JoblyApi from '../API/api' 
import SearchForm from './SearchForm'
import CompanyCard from './CompanyCard' 
import useSearchTerm from '../hooks/useSearchTerm'
import '../static/styles/CompanyList.css' 

const CompanyList = () => {
    const [companies, setCompanies] = useState([])
    const [searchTerm, updateSearchTerm] = useSearchTerm() 

    useEffect(() => {
        async function getCompanies(searchTerm) {
            const response = await JoblyApi.getCompanies(searchTerm) 
            setCompanies(response)
        }
        // call async function now 
        // - include searchTerm as params now
        getCompanies(searchTerm) 

        // later on we can run a cleanup function 
        return function cleanup() {
            setCompanies([])
        }
        // searchTerm dependency now
    }, [searchTerm]); 

    return (
        <div className="CompanyList-div">
            <SearchForm updateSearchTerm={updateSearchTerm} /> 
            {companies.map((c) => (
                <CompanyCard 
                    key={c.handle}
                    handle={c.handle}
                    name={c.name}
                    description={c.description}
                />
            ))}
        </div>
    )
}

export default CompanyList 