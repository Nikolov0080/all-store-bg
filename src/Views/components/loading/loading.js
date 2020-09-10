import React from 'react'
import {Spinner} from 'react-bootstrap';

const Loading = () => {
    return (
        <div className="text-center">
            <h1>Loading...
            <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </h1>
        </div>
    )
}

export default Loading
