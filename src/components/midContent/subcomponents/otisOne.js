import React from 'react';
import './otisOne.css';
import Logo from '../../../assets/OtisONE_2.png';
import OO from '../../../assets/otis_one_nasscom.png';

export default class OtisOne extends React.Component {
  render() {
    function handleClick(e) {
        window.location="/Projects/1"
      }
      return(
    <div className = "otisOne" style= {{backgroundImage:`url(${Logo})`}}>
        <div className= "otisOneComponent">
            <div className = "midComponentHeader">
                <span className="flexNormal"><p className="poppinsBold size24 blue">OTIS</p><p className="poppinsLight size24 leftSpaced blue">ONE</p></span>
            </div>
            <div className = "subtext">
                <span className="poppinsBold size18">DASHBOARD FOR CONNECTED ELEVATORS AND ESCALATORS</span>
                <span className= "secondaryTextGrey poppinsSemiBold">Role: UI/UX Designer</span>
            </div>
            <div className = "content">
                <span className= "poppinsLight size14">Conceptualise and design next generation dashboard for realtime monitoring, analysing andpredictive servicing for next generation connected OTIS Elevators and Escalators</span>
            </div>
            <div className = "timeline">
                <ol className= "timelineHead">
                    <li className="timeLineDate start" >
                        <span className= "timeLineText poppinsMedium size12">Jun 2018</span>
                    </li>
                    <li className="timeLineDate end">
                        <span className= "timeLineText lastChild poppinsMedium size12">Present</span>
                    </li>
                </ol>
                <p className="timelineTotal poppinsMedium size12"> 2yrs & 5months</p>
            </div>
            <div className = "viewButton">
                <span className= "caseButton poppinsMedium size14" href= "/Projects/1"onClick={handleClick}>View Case Study</span>
            </div>
        </div>
        <div className="midComponentImg">
            <figure>
                <img alt="img" src={OO}/>
            </figure>
        </div>
    </div>
      )
  }
}