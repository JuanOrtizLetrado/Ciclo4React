import React from 'react'
import { Outlet } from 'react-router'

const Layout2 = () => {
    return (
        <div>
           <nav>Esta es el navbar 2</nav> 
           <Outlet/>
        </div>
    )
}

export default Layout2
