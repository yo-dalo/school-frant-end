import React from 'react'
import { Nav } from '../part/nav/Nav'
import Footer from '../part/footer/Footer'
import { useAuth } from "../context/AuthContext";

const Layout = ({ title, children }) => {
    const { phoneNav } = useAuth();
    return (

        <main style={{pointerEvents: phoneNav?"none":"auto" }} className=' w-screen relative  '>
            <Nav />
            {children}
            <Footer />
        </main>


    )
}

export default Layout