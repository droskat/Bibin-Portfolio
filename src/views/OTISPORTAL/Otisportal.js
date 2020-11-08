import React from 'react';
import './Otisportal.css';
import Header from "../../components/header/header"
import OtisPortal from "../../components/otisPortal/otisPortal"
import Footer from "../../components/footer/footer"
const Otisportal = props => {
    return (
      <div className="App">
        <div className= "ParentContainer">

          <div className= "SideLine"></div>
          <div className= "sideHighlight">
            <Header />
            
          </div>
          <OtisPortal />
          
        </div>
        <Footer />

      </div>
    );
}

export default Otisportal;
export { default as Otisportal } from './Otisportal';