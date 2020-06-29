import React from 'react' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt , faPhoneAlt , faEnvelope } from '@fortawesome/free-solid-svg-icons'

const logo = require('../../Assets/Images/TruckBook-Logo.png')


class Footer extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="footer-div">
                <img src={logo} alt="logo" className="footer-logo" /> 
                <h5 className="footer-h5">Get your lanes and loads perfectly matched with the right trucker on Truckbook.</h5>
                <ul className="footer-icons-div">
                    <li>
                        <FontAwesomeIcon className="footer-icon" icon={faMapMarkerAlt} /><a>5701, Lonetree Blvd, Suite # 313, Rocklin, CA, 95765</a>
                    </li>
                    <li>
                        <FontAwesomeIcon className="footer-icon" icon={faPhoneAlt} /> 
                        <a href="tel:+19164000002" className="footer-phone"> +1 916-400-0002, </a>
                        <a href="tel:+19164000003" className="footer-phone">+1 916-400-0003 </a>
                    </li>
                    <li>
                        <FontAwesomeIcon className="footer-icon" icon={faEnvelope} /> <a href="mailto:support@truckbook.us" className="footer-phone">support@truckbook.us</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer