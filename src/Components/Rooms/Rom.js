import React, { useContext } from 'react'
import styles from './Room.module.css'
import GlobalContext from '../../Context'
import { Link } from 'react-router-dom'

const Rom = ({ item }) => {
    const { rooms, featuredRooms, getSingleroom } = useContext(GlobalContext)
    return (
        <div>
            {
                (<div className={styles.featuredrooms}>
                    <div className={styles.featuredroomsInner}>
                        <p className={styles.featuredPrice} >${item.price} <span className={styles.nigth}>per night</span> </p>
                        <img className={styles.featuredImag} src={item.images[0]} alt={item.slug} />
                        <p className={styles.featuredName} >{item.name.toUpperCase()}</p>
                        <Link to={`/rooms/${item.slug}`}>
                            <p className={styles.featuredBtn} onClick={() => getSingleroom(item.slug)}>FEATURES</p>
                        </Link>

                    </div>
                </div>)
            }
        </div>
    )
}

export default Rom