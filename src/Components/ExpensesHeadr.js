import React, { useContext } from 'react'
import styles from './ExpensesHeader.module.css'
import GlobalContext from '../Context'

const ExpensesHeadr = () => {

    const store = useContext(GlobalContext)
    const { totalExpenditure, expense } = store
    const { totalIncome, totalExpenses } = totalExpenditure
    const overallTotal = totalIncome + totalExpenses
    const symbol = overallTotal >= 0 ? '' : '-'
    return (
        <div className={styles.expensesHeader} >
            <h2 className={styles.title}>Expenses Tracker</h2>
            <p>YOUR BALANCE</p>
            <h2 style={{ textAlign: 'left', color: `${overallTotal > 0 ? 'green' : 'red'}` }}> {symbol} $ {Math.abs(overallTotal)}</h2>
        </div>
    )
}

export default ExpensesHeadr