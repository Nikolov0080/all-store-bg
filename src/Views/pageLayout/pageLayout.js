import React from 'react'
import Navigation from './navigation/navigation';
import Footer from './footer/footer';
import style from './pageLayout.module.css';


const PageLayout = (props) => {
    return (
        <div>
            <Navigation />
            <div>
                PageLayout
            {props.children}
            </div>

            <div className={style.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default PageLayout;