import React from 'react';
import './SkillBox.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Skills from '../../../assets/skills.png' 
import XD from '../../../assets/skills/adobe_XD_logo.png'
import AL from '../../../assets/skills/adobe-illustrator.png'
import AE from '../../../assets/skills/aftereffects_logo.png'
import Max from '../../../assets/skills/3ds-max_logo.png'
import IV from '../../../assets/skills/invision_logo.png'
import PS from '../../../assets/skills/photoshop_logo.png'
import SK from '../../../assets/skills/sketch_logo.png'
import KS from '../../../assets/skills/keyshot_logo.png'
import MSO from '../../../assets/skills/ms_office_logo.png'
import MTO from '../../../assets/skills/microsoft-teams_logo.png'
import SL from '../../../assets/skills/slack_logo.png'
import WE from '../../../assets/skills/Webex_logo.png'
import DO from '../../../assets/skills/devops_logo.png'
export default class SkillBox extends React.Component {
  render() {
      return(
    <div className = "SkillOne">
        <div className= "SkillBox">   
        <span className="boxTitle poppinsMedium size16">Design Tools</span> 
          <ol className= "skillList poppinsMedium size14">
            <li className="skillelement"><img alt="logo" src= {XD}></img><div className="skillelement2"><span>Adobe XD</span>
            <ProgressBar now={85}  /></div>
            </li>
            <li className="skillelement"><img alt="logo" src= {PS}></img><div className="skillelement2"><span>Adobe Photoshop</span>
            <ProgressBar now={90}  /></div>
            </li>
            <li className="skillelement"><img alt="logo" src= {AL}></img><div className="skillelement2"><span>Adobe Illustrator</span>
            <ProgressBar now={40}  /></div>
            </li>
            <li className="skillelement"><img alt="logo" src= {IV}></img><div className="skillelement2"><span>Invision</span>
            <ProgressBar now={60}  /></div>
            </li>
            <li className="skillelement"><img alt="logo" src= {SK}></img><div className="skillelement2"><span>Sketch</span>
            <ProgressBar now={15}  /></div>
            </li>
            <li className="skillelement"><img alt="logo" src= {AE}></img><div className="skillelement2"><span>Adobe After Effects</span>
            <ProgressBar now={50}  /></div>
            </li>
            <li className="skillelement"><img alt="logo" src= {Max}></img><div className="skillelement2"><span>3Ds Max</span>
            <ProgressBar now={15}  /></div>
            </li>
            
            <li className="skillelement"><img alt="logo" src= {KS}></img><div className="skillelement2"><span>Keyshot</span>
            <ProgressBar now={90}  /></div>
            </li>
          </ol>
        </div>
        <div className= "SkillBox">
        <span className="boxTitle poppinsMedium size16">Productivity Tools</span> 
          <ol className= "skillList poppinsMedium size14">
          <li className="skillelement"><img alt="logo" src= {MSO}></img><div className="skillelement2"><span>MS Office</span></div>
          </li>
          <li className="skillelement"><img alt="logo" src= {DO}></img><div className="skillelement2"><span>MS Azure Devops</span></div>
          </li>
          <li className="skillelement"><img alt="logo" src= {SL}></img><div className="skillelement2"><span>Slack</span></div>
          </li>
          <li className="skillelement"><img alt="logo" src= {MTO}></img><div className="skillelement2"><span>MS Teams</span></div>
          </li>
          <li className="skillelement"><img alt="logo" src= {WE}></img><div className="skillelement2"><span>WebEX</span></div>
          </li>
          </ol>
        </div>
        <div className= "SkillBoxSpecial2">   
        <span className="boxTitle poppinsMedium size16">Domains</span> 
          <ol className= "skillList poppinsMedium size14"> 
            <li className="skillelement3"><span>IOT and Connected Devices</span>
            </li>
            <li className="skillelement3"><span>Manufacturing</span>
            </li>
            <li className="skillelement3"><span>Healthcare</span>
            </li>
            <li className="skillelement3"><span>Media and Entertainment</span>
            </li>
            <li className="skillelement3"><span>E-commerce</span>
            </li>
            
          </ol>
          <div className= "SkillBoxSpecial"> 
          <figure>
            <img alt ="img" src ={Skills}/>
          </figure>
        </div>

        </div>
        
    </div>
      )
  }
}