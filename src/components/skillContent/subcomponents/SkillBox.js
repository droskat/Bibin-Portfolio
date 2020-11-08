import React from 'react';
import './SkillBox.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Skills from '../../../assets/skills.png' 

export default class SkillBox extends React.Component {
  render() {
      return(
    <div className = "SkillOne">
        <div className= "SkillBox">   
        <span className="boxTitle poppinsMedium size16">Design Tools</span> 
          <ol className= "skillList poppinsMedium size14">
            <li className="skillelement"><span>Adobe XD</span>
            <ProgressBar now={85}  />
            </li>
            <li className="skillelement"><span>Adobe Photoshop</span>
            <ProgressBar now={90}  />
            </li>
            <li className="skillelement"><span>Adobe Illustrator</span>
            <ProgressBar now={40}  />
            </li>
            <li className="skillelement"><span>Invision</span>
            <ProgressBar now={60}  />
            </li>
            <li className="skillelement"><span>Sketch</span>
            <ProgressBar now={15}  />
            </li>
            <li className="skillelement"><span>Adobe After Effects</span>
            <ProgressBar now={50}  />
            </li>
            <li className="skillelement"><span>3Ds Max</span>
            <ProgressBar now={15}  />
            </li>
            
            <li className="skillelement"><span>Keyshot</span>
            <ProgressBar now={90}  />
            </li>
          </ol>
        </div>
        <div className= "SkillBox">
        <span className="boxTitle poppinsMedium size16">Productivity Tools</span> 
          <ol className= "skillList poppinsMedium size14">
          <li className="skillelement"><span>MS Office</span>
          </li>
          <li className="skillelement"><span>MS Azure Devops</span>
          </li>
          <li className="skillelement"><span>Cisco Webex Meetings</span>
          </li>
          <li className="skillelement"><span>MS teams</span>
          </li>
          </ol>
        </div>
        <div className= "SkillBox">   
        <span className="boxTitle poppinsMedium size16">Domains</span> 
          <ol className= "skillList poppinsMedium size14"> 
            <li className="skillelement"><span>IOT and Connected Devices</span>
            </li>
            <li className="skillelement"><span>Healthcare</span>
            </li>
            <li className="skillelement"><span>E-commerce</span>
            </li>
            <li className="skillelement"><span>Manufacturing</span>
            </li>
          </ol>
        </div>
        <div className= "SkillBoxSpecial"> 
          <figure>
            <img alt ="img" src ={Skills}/>
          </figure>
        </div>
    </div>
      )
  }
}