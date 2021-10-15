import React, { useState, useEffect } from 'react' 
import { useParams } from 'react-router-dom'
import JoblyApi from '../API/api' 
import JobCard from './JobCard' 
import '../static/styles/CompanyDetail.css'

const CompanyDetail = () => {
    const { handle } = useParams() 

    const INITIAL_STATE = {
        name: '',
        description: '',
        jobs: []
    }

    const [companyDetail, setCompanyDetail] = useState(INITIAL_STATE)

    useEffect(() => {
        async function getCompanyDetailAPI(handle) {
            const response = await JoblyApi.getCompany(handle) 
            setCompanyDetail(response) 
        }
        getCompanyDetailAPI(handle) 
    }, [handle])

    return (
        <div className="CompanyDetail-div">
            <h4>{companyDetail.name}</h4>
            <p>{companyDetail.description}</p>
            <div className="CompanyDetail-div2">
                {companyDetail.jobs.map((j) => (
                    <JobCard
                        key={j.id}
                        jobID={j.id}
                        title={j.title}
                        salary={j.salary}
                        equity={j.equity}
                    />
                ))}
            </div>
        </div>
    )
}

export default CompanyDetail 