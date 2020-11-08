import React from 'react';
import './midContent.css';
import OtisOne from "./subcomponents/otisOne";
import OtisAPI from "./subcomponents/otisAPI";
import Ecomm from './subcomponents/ecomm';

export default class MidContent extends React.Component {
  render() {
    return (
        <div className= "midContent">
            <div className ="intro">
                <span className= "introText">What is the most resilient parasite?</span>
                <span className= "introText">an <yellow>Idea</yellow></span>
            </div>
            <div className = "imageContent">
            <OtisOne />
            <OtisAPI />
            <Ecomm />
            </div>
        </div>
    )
    
  }
}