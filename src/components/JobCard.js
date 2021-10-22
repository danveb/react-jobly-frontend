import React, { useContext } from "react"
import UserContext from '../UserContext'
import FunctionContext from "../FunctionContext"
import { Button, Card, CardBody, CardText, CardTitle, InputGroupAddon } from "reactstrap"
import "../static/styles/JobCard.css"

const JobCard = ({ title, jobID, salary, equity, companyName }) => {
    const user = useContext(UserContext) 
    const { handleJobApp } = useContext(FunctionContext) 

    return (
        <div>
        <Card className="JobCard-tile">
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{companyName}</CardText>
                <CardText>{`Salary: $${Number(salary).toLocaleString()} | Equity: ${equity === null ? 0 : equity}%`}</CardText>
                <InputGroupAddon>
                {user.applications.find((j) => j === jobID) ? (
                    <Button color="success">Applied</Button>
                ) : (
                    <Button 
                    color="danger"
                    onClick={() => handleJobApp({ jobID, username: user.username })}
                    >Apply</Button>
                )}
                </InputGroupAddon>
            </CardBody>
        </Card>
        </div>
    )
}

export default JobCard