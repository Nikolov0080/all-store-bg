import React from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoggedView = () => {
    return (
        <div>
             <Card className="text-center" style={{ fontSize: "large", marginTop: "5%" }}>
                <Card.Body>
                    <Card.Header style={{ fontSize: "25px" }}>You are Logged In !</Card.Header>
                    <Card.Text>
                       Fell free to view all the Products in the store !
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Take a look...</ListGroupItem>

                        <ListGroupItem><Card.Link as={Link} to="/products">
                            <Button size="lg" style={{ width: '100%' }}>products</Button>
                        </Card.Link>
                        </ListGroupItem>
                        <ListGroupItem>Check your profile</ListGroupItem>
                        <ListGroupItem>
                            <Card.Link as={Link} to="/profile">
                                <Button size="lg" style={{ width: '100%' }}>View Profile</Button>
                            </Card.Link>
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LoggedView;