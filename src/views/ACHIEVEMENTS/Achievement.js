import React from 'react';
import './Achievement.css';
import Header from "../../components/header/header"
import AchievementContent from "../../components/achievementContent/achievementContent"
import Footer from "../../components/footer/footer"
const Achievement = props => {
    return (
      <div className="App">
        <div className= "ParentContainer">

          <div className= "SideLine3"></div>
          <div className= "sideHighlight">
            <Header tab="achievement" color= "00c0d9"/>
            
          </div>
          <AchievementContent />
          
        </div>
        <Footer />

      </div>
    );
}

export default Achievement;
export { default as Achievement } from './Achievement';
