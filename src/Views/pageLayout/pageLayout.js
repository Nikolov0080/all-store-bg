import React from 'react'
import Navigation from './navigation/navigation';

const PageLayout = (props) => {
    return (
        <div>
            <Navigation />
            PageLayout
            {props.children}
        </div>
    )
}

export default PageLayout
