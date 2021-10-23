import React, { useState, useEffect, useContext } from 'react' 
import UserContext from '../UserContext'
import { useParams, Redirect } from 'react-router-dom'
import JoblyApi from '../API/api' 
import JobCard from './JobCard' 
import '../static/styles/CompanyDetail.css'

const CompanyDetail = () => {
    const user = useContext(UserContext) 
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

    return user.username ? (
        <div className="CompanyDetail">
            <h3>{companyDetail.name}</h3>
            <div>{companyDetail.description}</div>
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
    ) : (
        <Redirect to="/"></Redirect>
    )
}

export default CompanyDetail 