import React from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GuestView = () => {
    return (
        <div>
            <Card className="text-center" style={{ fontSize: "large", marginTop: "5%" }}>
                <Card.Body>
                    <Card.Header style={{ fontSize: "25px" }}>Welcome to ALL-STORE</Card.Header>
                    <Card.Text>
                       This is a website for selling and buying anything (legal)
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Already have Registered?</ListGroupItem>

                        <ListGroupItem><Card.Link as={Link} to="/login">
                            <Button size="lg" style={{ width: '100%' }}>Login</Button>
                        </Card.Link>
                        </ListGroupItem>
                        <ListGroupItem>Don't have an Account?</ListGroupItem>
                        <ListGroupItem>
                            <Card.Link as={Link} to="/register">
                                <Button size="lg" style={{ width: '100%' }}>Register</Button>
                            </Card.Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GuestView;