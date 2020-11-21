import React from 'react';
import './aboutmeTImeline.css';
import presentFace from '../../../assets/bj_present.png';
import mtechFace  from '../../../assets/bj_mdes.png';
import btechFace  from '../../../assets/bj_engg.png';
import schoolFace  from '../../../assets/bj_school.png';
import phone  from '../../../assets/phone.svg';
import mail  from '../../../assets/email.svg';
import address from '../../../assets/address.svg';
import linkedin from '../../../assets/linkedin.svg';
import twitter from '../../../assets/twitter.svg';
import behance from '../../../assets/behance.svg';
import insta from '../../../assets/instagram.svg';
export default class AboutmeTimeline extends React.Component {
  render() {
      return(
    <div className = "AboutOne">
        <div className= "faceTimeline">
            
            <div className="faceList">
              <ol className="faceIcon">
                <li className="faceElement">
                  <img alt="img" src={presentFace}/>
                </li>
                <li className="faceElement">
                  <img alt="img" src={mtechFace}/>
                </li>
                <li className="faceElement">
                  <img alt="img" src={btechFace}/>
                </li>
                <li className="faceElement">
                  <img alt="img" src={schoolFace}/>
                </li>
              </ol>
            </div>
            <div className="taskList">
              <ol className="tasks">
                  <li className="taskElement">
                    <span className="poppinsMedium size20">UX Designer</span>
                    <span className="poppinsMedium size16">L&T infotech, Mumbai</span>
                  </li>
                  <li className="taskElement">
                  <span className="poppinsMedium size20">M.Des Transportation Design</span>
                    <span className="poppinsMedium size16">UPES, Dehradun</span>
                  </li>
                  <li className="taskElement">
                  <span className="poppinsMedium size20">B.E Mechanical Engineering</span>
                    <span className="poppinsMedium size16">SVPCET, Nagpur</span>
                  </li>
                  <li className="taskElement">
                  <span className="poppinsMedium size20">Schooling</span>
                    <span className="poppinsMedium size16">Kendriya Vidyalaya, Nasik</span>
                  </li>
              </ol>
            </div>
            <div className="YearList">
              <ol className="years">
                    <li className="yearElement poppinsMedium size20 greenText">
                      Present
                    </li>
                    <li className="yearElement poppinsMedium size20">
                      2018
                    </li>
                    <li className="yearElement poppinsMedium size20"> 
                      2015
                    </li>
                    <li className="yearElement poppinsMedium size20"> 
                      2011
                    </li>
              </ol>
            </div>
        </div>
        <span className="contactHeader poppinsBold size20">Get in touch</span>
        <div className="contactUs boxContact">   
          <div className="firstBlock poppinsMedium size16">
            <div className="leftBlock poppinsMedium size16">
              <span><img alt="img" src={phone}/> Phone</span>
              <br/>
              <span className="flexRowAbout">Primary Number&nbsp;:&nbsp;<p className="poppinsLight">+91-7259856553</p></span>
              <span className="flexRowAbout">Secondary Number:&nbsp;<p className="poppinsLight">+91-8279928359</p></span>
            </div>
            <div className="rightBlockNew poppinsMedium size16">
            <span><img alt="img" src={mail}/> E-mail</span>
            <br/>
            <span className="flexRowAbout">Work&nbsp;:&nbsp;<p className="poppinsLight"><a className="footerText" rel="noopener noreferrer" target="_blank" href="mailto:nerdwithapaintbrush@gmail.com"> thenerdwithapaintbrush@gmail.com</a></p></span>
            <span className="flexRowAbout">Personal:&nbsp;<p className="poppinsLight"><a className="footerText"  rel="noopener noreferrer" target="_blank" href="mailto:bibinj80@gmail.com"> bibinj80@gmail.com</a></p></span>
            </div>
          </div>
          <div className="secondBlock poppinsMedium size16">
            <div className="leftBlockSpecial poppinsMedium size16">
              <div className="leftBlock poppinsMedium size16">
                <span><img alt="img" src={address}/> Address</span>
                <br/>
                <span>Permanent Address:</span>
                <span className="poppinsLight size16">Edacheriparambil House</span>
                <span className="poppinsLight size16">Chittar, Edanadu P.O</span>
                <span className="poppinsLight size16">Pala, Kottayam</span>
                <span className="poppinsLight size16">Kerala</span>
              </div>
              <div className="rightBlock poppinsMedium size16">
              <br/>
              <br/>
                <span>Current Address:</span>
                <span className="poppinsLight size16">B-1503, Lodha Luxury Priva</span>
                <span className="poppinsLight size16">Majiwada, Thane</span>
                <span className="poppinsLight size16">Mumbai</span>
              </div>
            </div>
            <div className="rightBlockNew poppinsMedium size16">
              <span>Social Media:</span>
              <br/>
              <div className="rightBlockSpecial poppinsMedium size16">
                <span className="lineAdjust"><a href="https://www.linkedin.com/in/bibin-jose-63051776" target="_blank" rel="noopener noreferrer"><img className="SMLogo" alt="img" src={linkedin}/></a></span>
                <span className="lineAdjust"><a href="https://www.behance.net/bibinj80a9fd" target="_blank" rel="noopener noreferrer"><img className="SMLogo" alt="img" src={behance}/></a></span>
                <span className="lineAdjust"><a href="https://www.twitter.com/Bibin14709830" target="_blank" rel="noopener noreferrer"><img className="SMLogo" alt="img" src={twitter}/></a></span>
                <span className="lineAdjust"><a href="https://www.instagram.com/Bibinjose444" target="_blank" rel="noopener noreferrer"><img className="SMLogo" alt="img" src={insta}/></a></span>
              </div>
            </div>
          </div>
        </div>
        
    </div>
      )
  }
}