import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../static/styles/CompanyCard.css'

const CompanyCard = ({ handle, name, description }) => {
    
    return (
        <div>
            <Card className="CompanyCard my-3">
                <Card.Body>
                    <Link className="CompanyCard-link" to={`/companies/${handle}`}>
                    <Card.Title tag="h6">{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CompanyCard