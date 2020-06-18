import React from "react"

import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function ProjectItem(props) {
    return (
        <Col md={6} xs={12} className="col-project">
            <Card>
                <Card.Body>
                    <Card.Title>{ props.info.title }</Card.Title>
                    <Card.Text>{ props.info.text }</Card.Text>
                    <div class="font-sm">
                        <span class="language-circle" style={ props.info.langColor }></span> { props.info.lang }
                        <Card.Link href={ props.info.link }>
                            <Button variant="outline-primary" className="float-right btn-sm">
                                Check it out
                            </Button>
                        </Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectItem