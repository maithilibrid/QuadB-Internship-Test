import React, { Component } from 'react';
import Logo from '../images/logo.png'
import Img2 from '../images/50.png'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './header.module.css'
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="d-flex justify-content-between align-items-center bg-dark">
                <img src={Logo}></img>
                <div className="d-flex">
                <select className={`${styles.color} form-control`}>
                    <option>INR</option>
                </select>
                <select className={`${styles.color} form-control`}>
                    <option>BTC</option>
                </select>
                </div>
                <div className="d-flex">
                    <img src={Img2}></img>
                    <button className="btn btn-info">Connect Telegram</button>
                    <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header ;