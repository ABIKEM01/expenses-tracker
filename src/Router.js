import React from 'react'
import HomeScreen from './Screens/HomeScreen'
import NotFoundScreen from './Screens/NotFoundScreen'
import RoomScreen from './Screens/RoomScreen'
import RoomsScreen from './Screens/RoomsScreen'
import { Route, Routes, Navigate } from 'react-router-dom'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/rooms' element={<RoomsScreen />} />
            <Route path='/rooms/:slug' element={<RoomScreen />} />
            <Route path='*' element={<Navigate to='./not-found' />} />
        </Routes>
    )
}

export default Router