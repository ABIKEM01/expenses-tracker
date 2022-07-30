import React from 'react'
import styles from './ExpensesHeader.module.css'
import { useContext } from 'react'
import GlobalContext from '../Context'
import { GoTrashcan } from 'react-icons/go'
import Hist from './Hist'

const History = () => {
    const store = useContext(GlobalContext)
    const { list, formData, deleteHandler, clearHandler } = store
    return (
        <div className={styles.historyContainer1}>
            <div className={styles.historyFlex}>
                <h3>History</h3>
                <button onClick={clearHandler}>Clear History</button>
            </div>

            {list.length > 0 && list.map((item) => (<div key={item.id} className={styles.historyContainer}>
                {/* <div className={styles.historyDeep}> */}
                <span><GoTrashcan className={styles.deleteHandler} onClick={(e) => deleteHandler(item.id)} />{item.text}</span> <span style={{ color: formData.amount > 0 ? 'green' : 'red' }}>{item.amount}</span>
                {/* </div> */}
            </div>))}
            {/* {list.length > 0 && list.map((item) => <Hist key={item.id} item={item} />)} */}


            {/* <h3 className={styles.historyTitle}>History</h3>
            <div className={styles.historyCash}>
                <span>Cash</span>
                <span>+500</span>
            </div>
            <div className={styles.historyBook}>
                <span>Book</span>
                <span>-40</span>
            </div>
            <div className={styles.historyCamera}>
                <span>Camera</span>
                <span>-200</span>
            </div> */}
        </div>
    )
}

export default History