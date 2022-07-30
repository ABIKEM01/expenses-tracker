import React, { useContext } from 'react'
import GlobalContext from '../../Context'
import Rom from './Rom'
import styles from './Room.module.css'


const Room = () => {
    const { rooms, filteredRooms } = useContext(GlobalContext)
    console.log('my room', rooms)
    return (
        <div className={styles.featuredroomsmain}>
            <h2 className={styles.featuredroomsTitle}>Featured Rooms</h2>
            <div className={styles.imagesFlex}>
                {filteredRooms && filteredRooms.length > 0 ? filteredRooms.map((item) => (<Rom key={item.slug} item={item} />)) : (<h2 className={styles.noroom}>No room found</h2>)}
            </div>


        </div>
    )
}

export default Room