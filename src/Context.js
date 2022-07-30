import React, { useState, useEffect } from 'react'
import data from './data';


const GlobalContext = React.createContext();

const Provider = ({ children }) => {
    const [state, setState] = useState({
        rooms: localStorage.getItem('rooms') ? JSON.parse(localStorage.getItem('rooms')) : [],
        featuredRooms: [],
        filteredRooms: [],
        loading: true,
        type: 'all',
        price: 0,
        maxPrice: 0,
        maxSize: 0,
        minSize: 0,
        capacity: 1,
        pets: false,
        breakfast: false,

    })

    useEffect(() => {
        newData()
    }, [])

    const newData = () => {
        const rooms = data.map((room) => ({
            id: room.sys.id,
            ...room.fields,
            images: room.fields.images.map((item) => item.fields.file.url)

        }))

        const prices = rooms.map((room) => room.price)
        const maxPrice = Math.max(...prices)

        const sizes = rooms.map((room) => room.size)
        const maxSize = Math.max(...sizes)
        const minSize = Math.min(...sizes)


        const copy = rooms
        const Featured = copy.filter((item) => item.featured === true)
        setState({
            ...state, rooms: rooms,
            featuredRooms: Featured,
            filteredRooms: copy,
            maxPrice,
            maxSize,
            minSize,
            loading: false,
            price: maxPrice,


        })
        localStorage.setItem('rooms', JSON.stringify(rooms))
    }
    console.log('my copy', state.featuredRooms)
    const changeHandler = (e) => {
        const type = e.target.type;
        const name = e.target.name;
        const value = type === 'checkbox' ? e.target.checked : e.target.value

        setState({ ...state, [name]: value })

        let filteredRM = [...state.rooms]
        if (name === 'type' && value !== 'all') {
            filteredRM = filteredRM.filter((room) => room.type === value)

            setState({
                ...state,
                filteredRooms: filteredRM
            })
        }

        if (name === 'capacity' && parseInt(value) !== 1) {
            filteredRM = filteredRM.filter((room) => room.capacity === parseInt(value))
        }

        if (name === 'price') {
            filteredRM = filteredRM.filter((room) => room.price <= state.price && room.price <= state.maxPrice)
        }

        filteredRM = filteredRM.filter((room) => room.size >= parseInt(state.minSize) && room.size <= parseInt(state.maxSize))
        if (type === 'checkbox') {
            filteredRM = filteredRM.filter((room) => room.pets === true && room.breakfast === true)
        }

        setState((prev) => ({
            ...prev,
            filteredRooms: filteredRM
        }))


    }
    const getSingleroom = (slug) => {
        const copy = state.rooms
        const newRoom = copy.find((room) => room.slug === slug)
        return newRoom
    }


    return (
        <GlobalContext.Provider value={{ ...state, changeHandler, getSingleroom }} >
            {children}
        </GlobalContext.Provider>
    )
}
const Consumer = GlobalContext.Consumer
export default GlobalContext
export { Provider, Consumer }