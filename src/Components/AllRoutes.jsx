import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Createissuepage from './Createissuepage'
import Homepage from './Homepage'
import Navbar from './Navbar'

const AllRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Createissuepage />} />
                <Route path='/homepage' element={<Homepage />} />
            </Routes>
        </div>
    )
}

export default AllRoutes
