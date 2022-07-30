import React from 'react'
import ExpensesHeadr from '../Components/ExpensesHeadr'
import History from '../Components/History'
import Income from '../Components/Income'
import Trasanction from '../Components/Trasanction'

const ExpensesHeaderScreen = () => {
    return (
        <div>
            <ExpensesHeadr />
            <Income />
            <History />
            <Trasanction />
        </div>
    )
}

export default ExpensesHeaderScreen