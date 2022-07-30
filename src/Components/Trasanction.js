import React, { useContext } from 'react'
import styles from './ExpensesHeader.module.css'
import GlobalContext from '../Context'

const Trasanction = () => {
    const store = useContext(GlobalContext)
    const { submitHandler, changeHandler, text, amount, formData } = store
    return (
        <div>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h3>Add New Trasanction</h3>
                <label>Text</label>
                <input type="text" name="text" onChange={changeHandler} value={formData.text} placeholder='Enter text' />
                <label> <div>Amount </div><div>negative- expense, positive-income</div></label>
                <input type='text' name='amount' onChange={changeHandler} value={formData.amount} placeholder='Enter amount' />
                <button type='submit' className={styles.formBtn}>Add Trasanction</button>
            </form>
        </div>
    )
}

export default Trasanction