import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
        <Header />
        <main className="pt-40 pb-40">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout