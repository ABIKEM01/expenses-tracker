import React, { useContext } from 'react'
import styles from './Room.module.css'
import GlobalContext from '../../Context'
import { Provider, Consumer } from '../../Context'
import { Link } from 'react-router-dom'

const Rooms = () => {
    const { rooms, maxPrice, maxSize, price, capacity, size, pets, breakfast, type, changeHandler, getSingleroom, minSize } = useContext(GlobalContext)
    let majorTypes = rooms.map((room) => room.type)
    majorTypes = new Set(majorTypes)
    console.log('types', majorTypes)
    majorTypes = ['all', ...majorTypes]

    const types = majorTypes.map((type, i) => (<option key={i} value={type}>{type}</option>))


    let majorCapacity = rooms.map((room) => room.capacity)
    majorCapacity = new Set(majorCapacity)
    majorCapacity = [...majorCapacity]
    console.log('capacity', majorCapacity)


    const Capacity = majorCapacity.map((capacity, i) => (<option key={i} value={capacity}>{capacity}</option>))
    return (

        <div className={styles.Generalcontainer}>
            <div className={styles.container}>
                <div className={styles.roomsContainer}>
                    <h1 className={styles.roomsTitle}>Our Rooms</h1>
                    <hr className={styles.roomsHr} />
                    <p className={styles.roomsRoom} >Deluxe Rooms At $299</p>
                    <Link to='/'>
                        <button className={styles.roomsBtn} onClick={() => getSingleroom()}>RETURN HOME</button>
                    </Link>
                </div>

            </div>
            <h2 className={styles.searchTitleContainer}>Search Rooms</h2>

            <div className={styles.searchMainflex}>
                <div className={styles.searchColoumnflex}>


                    <form className={styles.searchMainflex}>
                        <div className={styles.searchColoumnflex}>
                            <label htmlFor="type">Room type</label>
                            <select name='type' id='type' onChange={changeHandler} className={styles.selectCapacity}>
                                {types}
                            </select>
                        </div>
                        <div className={styles.searchColoumnflex}>
                            <label htmlFor="capacity">Capacity</label>
                            <select name='capacity' id='capacity' value={capacity} onChange={changeHandler} className={styles.selectnumber}>
                                {Capacity}
                            </select>
                        </div>
                        <div className={styles.searchColoumnflex}>
                            <label htmlFor="price">Room Price {price}</label>
                            <input type='range' name='price' id='price' value={price} onChange={changeHandler} min={0} max={maxPrice} />
                        </div>
                        <div className={styles.searchColoumnflexSize}>
                            <label htmlFor="size">Room size</label>
                            <div className={styles.searchColoumnflexnumber}>
                                <input type='number' value={minSize} name='minSize' id='size' onChange={changeHandler} className={styles.numberstyles} />
                                <input type='number' value={maxSize} name='maxSize' id='size' onChange={changeHandler} className={styles.numberstyles} />
                            </div>

                        </div>
                        <div className={styles.searchCheckBox}>
                            <div className={styles.searchBreakfast} >

                                <input type='checkbox' checked={breakfast} name='breakfast' id='breakfast' onChange={changeHandler} />
                                <label htmlFor="breakfast">Breakfast</label>
                            </div>
                            <div className={styles.searchBreakfast}>
                                <input type='checkbox' checked={pets} name='pets' id='pets' onChange={changeHandler} />
                                <label htmlFor="pets">Pets</label>
                            </div>
                        </div>
                    </form>
                    {/* <p>Room Type</p>
                    <select className={styles.selectCapacity} onChange={changeHandler} name='type'>
                        <option value="all">all</option>
                        <option value="single">single</option>
                        <option value="double">double</option>
                        <option value="family">family</option>
                        <option value="presidential">presidential</option>
                    </select> */}
                </div>
                {/* <div className={styles.searchColoumnflex}>
                    <p>Capacity</p>
                    <select className={styles.selectnumber} onChange={changeHandler} name='type'>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                        <option value="six">6</option>
                    </select>
                </div> */}
                {/* <div className={styles.searchColoumnflex}>
                    <p>Room Price $600</p>
                    <input type='range' />
                </div> */}
                {/* <div className={styles.searchColoumnflexSize}>
                    <p>Room Size</p>
                    <div className={styles.searchColoumnflexnumber}>
                        <input type='number' className={styles.numberstyles} />
                        <input type='number' className={styles.numberstyles} />
                    </div>
                </div> */}
                {/* <div className={styles.searchCheckBox}>
                    <div className={styles.searchBreakfast}>
                        <input type='checkbox' />
                        <span>Breakfast</span>
                    </div>
                    <div className={styles.searchBreakfast}>
                        <input type='checkbox' />
                        <span>Breakfast</span>
                    </div>
                </div> */}
            </div>
        </div >

    )
}

export default Rooms