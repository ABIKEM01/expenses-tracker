import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'

const Layout = (props) => {
    return (
        <div className={styles.layout}>
            <Navigation />
            <div className={styles.main}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout