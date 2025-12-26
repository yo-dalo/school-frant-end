import React from 'react'
import { Nav } from '../part/nav/Nav'
import Footer from '../part/footer/Footer'

const Layout = ({ title, children }) => {
    return (

        <main className=' '>
            <Nav />
            {children}
            <Footer />
        </main>


    )
}

export default Layout