import React from 'react'
import FullHome from './Home/FullHome'
import Driver from './Truckdriver/truckdriver'
import WeAre from './weare/weare'
import Start from './star/start'
import Footer from './footer/footer'

function FullPage(){
    return(
        <div>

            <FullHome />

            <Driver /> 

            <WeAre />

            <Start />

            <Footer />
            
        </div> 
    )
}

export default FullPage