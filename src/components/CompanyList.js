import React, { useState, useEffect } from 'react' 
import JoblyApi from '../API/api' 
import CompanyCard from './CompanyCard' 

const CompanyList = () => {

    const [companies, setCompanies] = useState([])

    useEffect(() => {
        async function getCompanies() {
            const response = await JoblyApi.getCompanies() 
            setCompanies(response)
        }
        // call async function now 
        getCompanies() 

        // later on we can run a cleanup function 
    }, []); 

    return (
        <div>
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