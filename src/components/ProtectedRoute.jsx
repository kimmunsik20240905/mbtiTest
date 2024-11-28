import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';

const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem('accessToken')
    if(!isAuthenticated){
        alert("로그인 페이지 이동");
        return <Navigate to="/login" />
    }
    return (
        <>
            <Outlet />
        </>
    )
}

export default ProtectedRoute