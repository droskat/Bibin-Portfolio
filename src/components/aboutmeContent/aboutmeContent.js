import React from 'react';
import './aboutmeContent.css';
import AboutmeTimeline from "./subcomponents/aboutmeTimeline";
import DownloadLogo from '../../assets/download.svg';
import resumepdf from "../../assets/Resume_PDF.pdf";
import resumeword from "../../assets/Resume_WORD.doc";

import Award from '../../assets/bibin_photo.png';

export default class AboutmeContent extends React.Component {
  render() {
    return (
        <div className= "midContent">
            <div className= "profileImage">
              <div className= "profileImageMain" style= {{backgroundImage:`url(${Award})`}}>
              </div>
            
            <div className ="introAbout">
                <div className="profileTextBox">
                    <span className="profileText poppinsMedium size16">UX Designer</span>
                    <span className="profileText poppinsMedium size16">|</span>
                    <span className="profileText poppinsMedium size16">Engineer</span>
                    <span className="profileText poppinsMedium size16">|</span>
                    <span className="profileText poppinsMedium size16">Movie Buff</span>
                    <span className="profileText poppinsMedium size16">|</span>
                    <span className="profileText poppinsMedium size16">Rider</span>
                    <span className="profileText poppinsMedium size16">|</span>
                    <span className="profileText poppinsMedium size16">Aquarium Enthusiast</span>
                </div>
                <span className="introText poppinsRegular size14">A designer who loves to craft great interaction experiences, while the engineer in me helps in having a technical angle. I’m currently working as
the key designer for the OTIS ONE program at LTI.  Also, I’m a great believer in empathy, as creators of interaction experiences between technology
and  people, I feel it’s important to have empathy towards our users and fellow beings while we design for them. The absolute obsession over my 
product’s experience and the kind of impact it has, is what keeps me awake and motivates me to push harder.</span>
                  <div className="resumeLinks poppinsMedium size16"><img alt="img"  src={DownloadLogo}/><span> Download Resume </span><a
                    download="bibinJose_Resume.pdf"
                    href={resumepdf}><span className="resumeButton">PDF</span></a><a
                    download="bibinJose_Resume.docx"
                    href={resumeword}><span className="resumeButton">Word</span></a>
                  </div>
            </div>
          </div>
           
            <div className = "aboutContent">
            <AboutmeTimeline />
            </div>
        </div>
    )
    
  }
}