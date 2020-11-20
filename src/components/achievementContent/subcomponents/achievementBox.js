import React from 'react';
import './achievementBox.css';
import Award from '../../../assets/awards.png';
import AwardStage from '../../../assets/awards2.png';
import email1  from '../../../assets/email1.png';
import email2  from '../../../assets/email2.png';
import email3  from '../../../assets/email3.png';
import email4  from '../../../assets/email4.png';
export default class AchievementBox extends React.Component {
  render() {
      return(
    <div className = "AchievementOne">
        <div className="flexRowAchieve">
            <div className= "SkillBox6" style= {{backgroundImage:`url(${Award})`}}>
            </div>
            <div className= "SkillBox1" style= {{backgroundImage:`url(${AwardStage})`}}>
            </div>
        </div>

        <div className= "gyan">
          <div className= "gyan2">
            <span className="achiveSub headLine poppinsBold size18">User Feedback & Client Appreciation</span>
            <span className="achiveSub poppinsMedium size14">For a Designer no award can match the delight that comes from the end user describing how their project made their life easier and how they loved using it</span>
          </div>
        </div>

        <div className="MailBoxMain">
            <div className= "mailBox1">
              <div className= "SkillBoxStyle1" style= {{backgroundImage:`url(${email1})`}}>
              </div>
              <div className= "SkillBoxStyle" style= {{backgroundImage:`url(${email4})`}}>
              </div>
            </div>
            <div className= "mailBox2">
              <div className= "SkillBoxStyle2" style= {{backgroundImage:`url(${email2})`}}>
              </div>
              <div className= "SkillBoxStyle2" style= {{backgroundImage:`url(${email3})`}}>
              </div>
              <div className= "SkillBoxStyle2">
                <span className="poppinsMedium size20">&</span>
                <span className="poppinsMedium size20">lot more</span>
              </div>
            </div>
          </div>
    </div>
      )
  }
}