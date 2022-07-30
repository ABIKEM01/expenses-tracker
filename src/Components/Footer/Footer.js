import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className={styles.navigation}>
            <ul className={styles.navigationFlex}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/rooms'>Rooms</Link></li>
                <li className={styles.beach}><Link to='/'>Darax  <span className={styles.beachResort}>Resort</span></Link></li>
            </ul>
            <span></span>
        </div>
    )
}

export default Footer