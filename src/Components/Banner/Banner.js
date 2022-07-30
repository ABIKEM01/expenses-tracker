import React, { useContext } from 'react'
import styles from './Banner.module.css'
import GlobalContext from '../../Context'
import { Link } from 'react-router-dom'

const Banner = () => {
    const { getSingleroom } = useContext(GlobalContext)
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerContainerInner}>
                <h1 className={styles.bannerTitle}>Luxurious Rooms</h1>
                <hr className={styles.bannerHr} />
                <p className={styles.bannerRoom} >Deluxe Rooms At $299</p>
                <Link to={'/rooms'}>
                    <button className={styles.bannerBtn} onClick={() => getSingleroom()}>OUR ROOMS</button>
                </Link>
            </div>
        </div>
    )
}

export default Banner