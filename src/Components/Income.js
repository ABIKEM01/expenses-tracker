import React from 'react'
import styles from './ExpensesHeader.module.css'
import { useContext } from 'react'
import GlobalContext from '../Context'

const Income = () => {
    const store = useContext(GlobalContext)
    const { totalExpenditure, expenses } = store
    const { totalIncome, totalExpenses } = totalExpenditure
    const totalE = totalExpenses * -1
    { console.log('totalExpenditure',) }
    return (
        <div className={styles.incomeContainer}>
            <div className={styles.incomeInner}>
                <h3>INCOME</h3>
                <p className={styles.incomeLeft}>${totalIncome}</p>
            </div>
            <div className={styles.expensesInner}>
                <h3>EXPENSES</h3>
                <p className={styles.incomerigth}>${totalE}</p>
            </div>
        </div>
    )
}

export default Income