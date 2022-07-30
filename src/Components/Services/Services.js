import React from 'react'
import styles from './Services.module.css'
import { FaCocktail } from 'react-icons/fa'
import { MdNordicWalking } from 'react-icons/md'
import { AiOutlineCar } from 'react-icons/ai'

const Services = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.services}>Services</h2>
            <div className={styles.servicesInfo}>
                <div className={styles.servicesIcons}>
                    <FaCocktail className={styles.iconStles} />
                    <h3>Free Coctail</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className={styles.servicesIcons}>
                    <MdNordicWalking className={styles.iconStles} />
                    <h3>Endless Hiking</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className={styles.servicesIcons}>
                    <AiOutlineCar className={styles.iconStles} />
                    <h3>Free Shuttle Van</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className={styles.servicesIcons}>
                    <FaCocktail className={styles.iconStles} />
                    <h3>Free Coctail</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>

            </div>
        </div>
    )
}

export default Services