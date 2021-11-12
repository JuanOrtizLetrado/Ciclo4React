import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <nav>Este el el navbar 1</nav>
            <Outlet/>
        </div>
    )
}

export default Layout
