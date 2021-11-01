import React, { useContext } from 'react'
import UserContext from '../UserContext'
import FunctionContext from '../FunctionContext'
import { Button, Card } from 'react-bootstrap'
import '../static/styles/JobCard.css'

const JobCard = ({ title, jobID, salary, equity, companyName }) => {
    const user = useContext(UserContext) 
    const { handleJobApp } = useContext(FunctionContext) 

    return (
        <Card className="JobCard">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{companyName}</Card.Text>
                <Card.Text>{`Salary: $${Number(salary).toLocaleString()} | Equity: ${equity === null ? 0 : equity}%`}</Card.Text>
                {user.applications.find((j) => j === jobID) ? (
                    <Button variant="success" disabled>Applied</Button>
                ) : (
                    <Button 
                    variant="warning"
                    onClick={() => handleJobApp({ jobID, username: user.username })}
                    >Apply</Button>
                )}
            </Card.Body>
        </Card>
    )
}

export default JobCard