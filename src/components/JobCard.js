import React from "react"
import { Button, Card, CardBody, CardText, CardTitle, InputGroupAddon } from "reactstrap"
import "../static/styles/JobCard.css"

const JobCard = ({ title, salary, equity, companyName }) => {
    
    return (
        <div>
        <Card className="JobCard-tile">
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{companyName}</CardText>
                <CardText>{`Salary: $${Number(salary).toLocaleString()} | Equity: ${equity === null ? 0 : equity}%`}</CardText>
                <InputGroupAddon addonType="append">
                <Button color="danger">Apply</Button>
                </InputGroupAddon>
            </CardBody>
        </Card>
        </div>
    )
}

export default JobCard