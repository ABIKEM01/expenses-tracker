import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

const Mobile = () => {
    return (
        <div>
            <ul>
                <li className={styles.homeMobile}><Link to='/'>Home</Link></li>
                <li className={styles.roomsMobile}><Link to='/rooms'>Rooms</Link></li>
                <li className={styles.roomsMobile}><Link to='/rooms'>Services</Link></li>
                <li className={styles.roomsMobile}><Link to='/rooms'>Gallery</Link></li>
                <li className={styles.roomsMobile}><Link to='/rooms'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Mobile