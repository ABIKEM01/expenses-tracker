import React, { useContext } from 'react'
import GlobalContext from '../../Context'
import Featured from './Featured'
import styles from './FeaturedRooms.module.css'

const FeaturedRooms = () => {
    const { rooms, featuredRooms } = useContext(GlobalContext)
    return (
        <div className={styles.featuredroomsmain}>
            <h2 className={styles.featuredroomsTitle}>Featured Rooms</h2>
            <div className={styles.imagesFlex}>
                {featuredRooms.map((item) => (<Featured key={item.slug} item={item} />))}
            </div>


        </div>
    )
}

export default FeaturedRooms