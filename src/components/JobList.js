import React, { useState, useEffect, useContext } from 'react' 
import { Redirect } from 'react-router-dom'
import UserContext from '../UserContext'
import JoblyApi from '../API/api' 
import JobCard from './JobCard' 
import SearchForm from './SearchForm'
import useSearchTerm from '../hooks/useSearchTerm'

const JobList = ({ props }) => {
    const user = useContext(UserContext)
    const [jobs, setJobs] = useState([])
    const [searchTerm, updateSearchTerm] = useSearchTerm() 

    useEffect(() => {
        async function getJobs(searchTerm) {
            const response = await JoblyApi.getJobs(searchTerm) 
            setJobs(response)
        }
        getJobs(searchTerm) 

        return function cleanup() {
            setJobs([])
        }
    }, [searchTerm]); 

    return user.username ? (
        <div className="JobList-div">
            <SearchForm updateSearchTerm={updateSearchTerm} /> 
            {jobs.map((j) => (
                <JobCard 
                    key={j.id}
                    jobID={j.id}
                    title={j.title}
                    companyName={j.companyName}
                    salary={j.salary} 
                    equity={j.equity}
                />
            ))}
        </div>
    ) : (
        <Redirect to="/"></Redirect>
    )
}

export default JobList