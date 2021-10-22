import React, { useState, useEffect } from 'react' 
import JoblyApi from '../API/api' 
import JobCard from './JobCard' 
import SearchForm from './SearchForm'
import useSearchTerm from '../hooks/useSearchTerm'
import '../static/styles/JobList.css'

const JobList = () => {
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

    return (
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
    )
}

export default JobList