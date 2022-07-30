import React, { useState, useEffect } from 'react';

const GlobalContext = React.createContext()

const Provider = (props) => {
    const [formData, setFormData] = useState({
        text: '',
        amount: ''
    })
    const [list, setList] = useState(localStorage.list ? JSON.parse(localStorage.list) : [])
    const [income, setIncome] = useState([])
    const [expenses, setExpenses] = useState([])
    const [totalExpenditure, setTotalExpenditure] = useState({
        totalExpenses: Number(''),
        totalIncome: Number(''),
    })
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list])

    const changeHandler = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }

    const deleteHandler = (id) => {
        const copy = [...list]
        const Filter = copy.length > 0 && copy.filter((itm) => itm.id !== id)
        setList(Filter)
    }

    const clearHandler = () => {
        setList([])
    }

    const submitHandler = (e) => {
        e.preventDefault()

        setList([...list, {
            id: list.length,
            text: formData.text,
            amount: parseFloat(formData.amount)
        }])
        localStorage.setItem("list", JSON.stringify(list))
        if (formData.amount > 0) {
            income.push(parseFloat(formData.amount))
            const totalIncome = income.reduce((curr, acc) => {
                const sum = curr + acc
                console.log('income sum', sum)
                return sum
            }, 0)
            totalExpenditure.totalIncome = totalIncome

        } else {
            expenses.push(parseFloat(formData.amount))
            { console.log('inner expenses', expenses) }
            const totalExpenses = expenses.reduce((curr, acc) => {
                const sum = (curr + acc)
                return sum
            }, 0)
            totalExpenditure.totalExpenses = totalExpenses
            { console.log('context expenses', totalExpenditure.expenses) }
        }

        setFormData({
            text: '',
            amount: ''
        })
        // const overallTotal = () => {
        //     totalExpenditure.totalIncome + totalExpenditure.expenses
        // }


    }
    const state = {
        formData,
        setFormData,
        changeHandler,
        submitHandler,
        list,
        setList,
        income,
        expenses,
        totalExpenditure,
        deleteHandler,
        clearHandler



    }

    return (
        <GlobalContext.Provider value={state}>
            {props.children}
        </GlobalContext.Provider>
    )
}
const Consumer = GlobalContext.Consumer
export default GlobalContext
export { Provider, Consumer } 