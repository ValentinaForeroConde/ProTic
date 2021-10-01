import React from 'react'
import Aside from 'components/Aside'
import Footer from 'components/Footer'

const PrivateLayout = ({children}) => {
    return (
        <div>
            <Aside/>{children}<Footer/>
        </div>
    )
}

export default PrivateLayout
