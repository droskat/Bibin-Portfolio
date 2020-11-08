import React from 'react';
import './otisAPI.css';
import Logo from '../../../assets/otisAPI.png';
import Dental from '../../../views/DENTAL/dental';

export default class OtisAPI extends React.Component {
  render() {
    function handleClick(e) {
        window.location="/Projects/2"
      }
      return(
    <div className = "otisAPI" style= {{backgroundImage:`url(${Logo})`}}>
      <div className= "otisOneComponent">
            <div className = "midComponentHeader">
                <span className="flexNormal"><p className="poppinsBold size24 red">API Portal</p></span>

            </div>
            <div className = "subtext">
                <span className=" poppinsBold size18">WEBSITE FOR DEVELOPERS TO ACCESS APIs FOR a major Elevator Manufacturer</span>
                <span className= "secondaryText poppinsSemiBold size14">Role: UX Designer</span>
            </div>
            <div className = "contentAPI">
                <span className= "poppinsLight size14">Visually update and improve the user experience of the existing API portal page while aligning to the brand guidelines and branding. Also, giving it a clean visual feel as most modern websites.</span>
            </div>
            <div className = "timeline">
                <ol className= "timelineHead">
                    <li className="timeLineDate start" >
                        <span className= "timeLineText poppinsMedium size12">Apr 2018</span>
                    </li>
                    <li className="timeLineDate end">
                        <span className= "timeLineText lastChild poppinsMedium size12">May 2018</span>
                    </li>
                </ol>
                <p className="timelineTotal poppinsMedium size12"> 2months</p>
            </div>
            <div className = "viewButton">
                <span className= "caseButton poppinsMedium size14" href= "/Projects/2"onClick={handleClick}>View Case Study</span>
            </div>
        </div>
    </div>
      )
  }
}