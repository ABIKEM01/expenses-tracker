import React, { useContext } from 'react'
import GlobalContext from '../../Context'
import styles from './FeaturedRooms.module.css'
import { Link } from 'react-router-dom'

const Featured = ({ item }) => {
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
                            <button className={styles.featuredBtn} onClick={() => getSingleroom(item.slug)}>FEATURES</button>
                        </Link>
                    </div>
                </div>)

            }

        </div>
    )
}

export default Featured