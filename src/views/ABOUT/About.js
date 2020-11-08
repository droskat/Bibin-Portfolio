import React from 'react';
import './About.css';
import Header from "../../components/header/header"
import AboutmeContent from "../../components/aboutmeContent/aboutmeContent"
import Footer from "../../components/footer/footer"
const About = props => {
    return (
      <div className="App">
        <div className= "ParentContainer">

          <div className= "SideLine2"></div>
          <div className= "sideHighlight">
            <Header tab="achievement" color= "#84fe74"/>
            
          </div>
          <AboutmeContent />
          
        </div>
        <Footer />

      </div>
    );
}

export default About;
export { default as About } from './About';
