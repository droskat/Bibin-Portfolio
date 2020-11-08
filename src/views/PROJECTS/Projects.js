import React from 'react';
import './Projects.css';
import Header from "../../components/header/header"
import OtisLine from "../../components/projectOtisLine/otisLine"
import Footer from "../../components/footer/footer"
const Projects = props => {
    return (
      <div className="App">
        <div className= "ParentContainer">

          <div className= "SideLine"></div>
          <div className= "sideHighlight">
            <Header tab="skills" color= "#f5cc34"/>
            
          </div>
          <OtisLine />
          
        </div>
        <Footer />

      </div>
    );
}

export default Projects;
export { default as Projects } from './Projects';
