import React, { useContext, useState } from 'react'
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import Mobile from './Mobile'

const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    return (
        <div className={styles.navigation}>
            <ul className={styles.navigationFlex}>
                <li className={styles.beach}><Link to='/'>Darax  <span className={styles.beachResort}>Resort</span></Link></li>
                <li className={styles.home}><Link to='/'>Home</Link></li>
                <li className={styles.rooms}><Link to='/rooms'>Rooms</Link></li>
                <li className={styles.rooms}><Link to='/rooms'>Services</Link></li>
                <li className={styles.rooms}><Link to='/rooms'>Gallery</Link></li>
                <li className={styles.rooms}><Link to='/rooms'>Contact</Link></li>
                <li><GiHamburgerMenu className={styles.hamburger} onClick={handleToggle} /></li>
            </ul>
            <span></span>
            {
                navbarOpen && <Mobile />

            }

        </div>
    )
}

export default Navigation