import React from 'react';
import './Skills.css';
import Header from "../../components/header/header"
import SkillContent from "../../components/skillContent/skillContent"
import Footer from "../../components/footer/footer"
const Skills = props => {
    return (
      <div className="App">
        <div className= "ParentContainer">

          <div className= "SideLine1"></div>
          <div className= "sideHighlight">
            <Header tab="skills" color= "00c0d9"/>
            
          </div>
          <SkillContent />
          
        </div>
        <Footer />

      </div>
    );
}

export default Skills;
export { default as Skills } from './Skill';
