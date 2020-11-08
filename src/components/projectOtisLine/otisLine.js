import React from 'react';
import './otisLine.css';
import Logo from '../../assets/map.png';
import OtisLineCarousel from './otisLineCarousel'
import OXPCarousel from './oneExpertCarousel'

export default class OtisLine extends React.Component {
  render() {
    return (
        <div className= "midContent">
            <div className ="introProject" style= {{backgroundImage:`url(${Logo})`}}>
                <span className ="poppinsBold size30"><yellow>OTIS ONE</yellow><br/>
                    <span className ="poppinsMedium size16">Applications: One expert Portal, Otisline</span>
                </span>
                <div className="mapStats">
                    <span className ="poppinsMedium size24">4<br/><p className ="poppinsMedium size16">Regions</p></span>
                    <span className ="poppinsMedium size24">8+<br/><p className ="poppinsMedium size16">Countries</p></span>
                    <span className ="poppinsMedium size24">4<br/><p className ="poppinsMedium size16">Languages</p></span>
                    <span className ="poppinsMedium size24">40000+<br/><p className ="poppinsMedium size16">Connected Equipments</p></span>
                </div>
            </div>
            <div className="contentOtisLine">
                <div className="contents">
                    <span className="subHeader poppinsBold size16">About Otis ONE</span>
                    <span className ="poppinsMedium size16">Otis ONE is the program to connect next generation OTIS Elevators and Escalators worldwide with the intent to increase operational transparency, proactive servicing and preventive shutdown</span>
                </div>
                <div className="contents">
                    <span className="subHeader poppinsBold size16">About OXP and OTISline :</span>
                    <span className ="poppinsMedium size16">OXP or ONE Xpert Portal is a IoT dashboard for maintenance experts to do real time monitoring, remote diagnostics and mechanic dispatches.
OTISline is a simple interface used by the OTIS customer care centre where the users can check on the realtime status of the equipment when
a customer calls in and take the needed action.</span>
                </div>
            </div>
            <OtisLineCarousel />
            <OXPCarousel />
            <div className = "imageContentProject">
            </div>
        </div>
    )
    
  }
}