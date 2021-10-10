import React from "react"
import { Card, CardBody, CardText, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"
import "../static/styles/CompanyCard.css"

const CompanyCard = ({ handle, name, description }) => {
    return (
        <div>
            <Card className="CompanyCard-tile">
                <Link className="CompanyCard-link" to={`/companies/${handle}`}>
                <CardTitle tag="h6">{name}</CardTitle>
                <CardText>{description}</CardText>
                </Link>
            </Card>
        </div>
    )
}

export default CompanyCard;