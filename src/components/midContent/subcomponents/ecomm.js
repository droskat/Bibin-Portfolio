import React from 'react';
import './ecomm.css';
import Logo from '../../../assets/dental.png';

export default class Ecomm extends React.Component {
  render() {
    function handleClick(e) {
        window.location="/Projects/3"
      }
      return(
    <div className = "ecomm" style= {{backgroundImage:`url(${Logo})`}}><div className= "otisOneComponent">
        <div className = "midComponentHeader">
            <span></span>

        </div>
        <div className = "subtext">
            <span className= "poppinsBold size18">E-COMMERCE OPPORTUNITY FOR DENTAL SUPPLIES MAJOR</span>
            <span className= "secondaryText poppinsSemiBold size14">Role: User Journey Mapping</span>
        </div>
        <div className = "contentEcomm">
            <span className= "poppinsLight size14">Consult several dentists and endors across India o understand the dental supply business model and evaluate the possibility fot 'direct to customer' online sales model for a major dental supply company</span>
        </div>
        <div className = "timeline">
            <ol className= "timelineHead">
                <li className="timeLineDate start" >
                    <span className= "timeLineText poppinsMedium size12">Feb 2018</span>
                </li>
                <li className="timeLineDate end">
                    <span className= "timeLineText lastChild poppinsMedium size12">Mar 2018</span>
                </li>
            </ol>
            <p className="timelineTotal poppinsMedium size12"> 2months</p>
        </div>
        <div className = "viewButton">
            <span className= "caseButton poppinsMedium size14"  href= "/Projects/3"onClick={handleClick}>View Case Study</span>
        </div>
    </div>
    </div>
      )
  }
}