import React from 'react';
import './achievementContent.css';
import AchievementBox from "./subcomponents/achievementBox";
import Awards from '../../assets/awards_icon.png'

export default class AchievementContent extends React.Component {
  render() {
    return (
        <div className= "midContent">
            <div className ="intro">
                <span className ="poppinsBold size24"><orange>NASCOMM</orange> Design4India Design Awards 2019 </span>
            </div>
            <div className = 'awardsLogo'>
              <figure >
                  <img alt="img "src={Awards}/>
              </figure>
            </div>
            <div className = "imageContent">
            <AchievementBox />
            </div>
        </div>
    )
    
  }
}