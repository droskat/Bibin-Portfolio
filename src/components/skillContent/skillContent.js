import React from 'react';
import './skillContent.css';
import SkillBox from "./subcomponents/SkillBox";

export default class SkillContent extends React.Component {
  render() {
    return (
        <div className= "midContent">
            <div className ="intro">
                <span className="poppinsMedium size30">Skills can always be aquired, the quest to </span>
                <span className="poppinsMedium size30"><blue>learn</blue> matters</span>
            </div>
            <div className = "imageContent">
            <SkillBox />
            </div>
        </div>
    )
    
  }
}