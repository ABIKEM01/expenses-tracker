import React from 'react'
import { useContext } from 'react'
import GlobalContext from '../Context'

const Hist = (item) => {
    { console.log(item) }
    const store = useContext(GlobalContext)
    const { list } = store
    return (
        <div>
            <h2>Item:{item.text}</h2>
            <h2>Amount:{item.amount}</h2>
        </div>
    )
}
export default Hist