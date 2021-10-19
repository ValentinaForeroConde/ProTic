import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import React from 'react'

const PublicLayout = ({ children }) => {
    return (
        <div className="contenedor-main-layout">
            <NavBar/>
            <main className="main-layout">{ children }</main>
            <Footer/>
        </div>
    )
};

export default PublicLayout;
