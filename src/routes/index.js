import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../containers/auth/login'
import ForgotPassword from '../containers/auth/forgot-password'

const Routing = ({ ...props }) => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
    )
}

export default Routing