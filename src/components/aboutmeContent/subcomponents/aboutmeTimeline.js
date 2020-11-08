import React from 'react';
import './aboutmeTImeline.css';
import Award from '../../../assets/awards.png';
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
        <div className= "profileImage">
            <span  className="profileText poppinsMedium size16">UX Designer</span>
            <div className= "profileImageMain" style= {{backgroundImage:`url(${Award})`}}>
            </div>
            <span className="profileText poppinsMedium size16">Engineer</span>
        </div>
        <div className= "moreInfo poppinsMedium size16"><span>Movie Buff</span><span>Rider</span><span>Aquarium hobbiest</span></div>

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

        <div className="contactUs">
          <span className="contactHeader poppinsBold size20">Get in touch</span>
          <div className="firstBlock poppinsMedium size16">
            <div className="leftBlock poppinsMedium size16">
              <span><img alt="img" src={phone}/> Phone</span>
              <br/>
              <span>Primary Number&nbsp;:&nbsp;+91-7259856553</span>
              <span>Secondary Number:&nbsp;+91-8279928359</span>
            </div>
            <div className="rightBlock poppinsMedium size16">
            <span><img alt="img" src={mail}/> E-mail</span>
            <br/>
            <span>Work&nbsp;:&nbsp; thenerdwithapaintbrush@gmail.com</span>
            <span>Personal:&nbsp; bibinj80@gmail.com</span>
            </div>
          </div>
          <div className="secondBlock poppinsMedium size16">
            <div className="leftBlockSpecial poppinsMedium size16">
              <div className="leftBlock poppinsMedium size16">
                <span><img alt="img" src={address}/> Address</span>
                <br/>
                <span>Permanent Address:</span>
                <span>Edacheriparambil House</span>
                <span>Chittar, Edanadu P.O</span>
                <span>Pala, Kottayam</span>
                <span>Kerala</span>
              </div>
              <div className="rightBlock poppinsMedium size16">
              <br/>
              <br/>
                <span>Current Address:</span>
                <span>B-1503, Lodha Luxury Priva</span>
                <span>Majiwada, Thane</span>
                <span>Mumbai</span>
              </div>
            </div>
            <div className="rightBlock poppinsMedium size16">
              <span>Social Media:</span>
              <br/>
              <span className="lineAdjust"><img alt="img" src={linkedin}/><a href="https://www.linkedin.com/in/bibin-jose-63051776" target="_blank" rel="noopener noreferrer">&nbsp; bibin-jose-63051776</a></span>
              <span className="lineAdjust"> <img alt="img" src={behance}/><a href="https://www.behance.net/bibinj80a9fd" target="_blank" rel="noopener noreferrer"> &nbsp; bibinj80a9fd</a></span>
              <span className="lineAdjust"><img alt="img" src={twitter}/><a href="https://www.twitter.com/Bibin14709830" target="_blank" rel="noopener noreferrer"> &nbsp; Bibin14709830</a></span>
              <span className="lineAdjust"><img alt="img" src={insta}/><a href="https://www.instagram.com/Bibinjose444" target="_blank" rel="noopener noreferrer"> &nbsp; Bibinjose444</a></span>
            </div>
          </div>
        </div>
        
    </div>
      )
  }
}