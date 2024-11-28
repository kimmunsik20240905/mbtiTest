import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Signup from '../pages/Signup'
import TestPage from '../pages/TestPage'
import Layout from '../components/Layout'
import ProtectedRoute from '../components/ProtectedRoute'
import UserProvider from '../components/UserProvider'
import TestResultList from '../pages/TestResultList'

const Router = () => {

    return (
        <UserProvider> 
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route element={<ProtectedRoute />} >
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/test" element={<TestPage />} />
                            <Route path="/result" element={<TestResultList />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}

export default Router