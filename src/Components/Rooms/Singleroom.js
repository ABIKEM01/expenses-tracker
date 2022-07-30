import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalContext from '../../Context'
import styles from './Singleroom.module.css'

const Singleroom = () => {
    const [room, setRoom] = useState(null)
    const [loading, setLoading] = useState(true)
    const { getSingleroom } = useContext(GlobalContext)
    const { slug } = useParams()

    useEffect(() => {
        if (!room || slug !== room.slug)
            var rm = getSingleroom(slug)
        setRoom(rm)
        setLoading(false)
    }, [slug])
    return (
        <div>
            {
                (loading && <h1> Loadin ...</h1>)
            }
            {
                room && <div className={styles.singleroomContainer}>
                    <div className={styles.singleroomexpand}>
                        <div className={styles.singleInfo}>
                            <h2>Info</h2>
                            <p>Price: $ {room.price ? room.price : ''}</p>
                            <p>Name: {room.name ? room.name : ''}</p>
                            <p>Size: {room.size ? room.size : ''} SQFT</p>
                            <p>Max capacity: {room.capacity ? room.capacity : ''} People</p>
                            <p>Pets {room.pets ? room.pets : ''} Allowed</p>

                        </div>
                        <div className={styles.singleDetails}>
                            <h2>Details</h2>
                            <p>Detais:{room.description ? room.description : ''}</p>
                        </div>
                    </div>
                    <div className={styles.extras}>
                        <h3>Exras</h3>
                        <p>{room.extras ? room.extras : ''}</p>
                    </div>

                    <div className={styles.flex}>
                        {
                            room.images.length > 0 && room.images.map((img, i) => <img className={styles.singleImg} key={i} src={img} alt={room.mame} />)}
                    </div>

                </div>
            }

        </div>
    )
}

export default Singleroom