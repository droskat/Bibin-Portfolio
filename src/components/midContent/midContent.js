import React from 'react';
import './midContent.css';
import OtisOne from "./subcomponents/otisOne";
import OtisAPI from "./subcomponents/otisAPI";
import Ecomm from './subcomponents/ecomm';
export default class MidContent extends React.Component {
constructor() {
  super();
    this.state = { isLoading: true }
}

componentDidMount() {
  console.log(this.state.isLoading)
    this.setState({isLoading: false})
}

  render() {
    return (
        <div className= "midContent">
            <div className ="intro">
                <span className= "introText">What is the most resilient parasite?</span>
                <span className= "introText">an <yellow>Idea</yellow></span>
                <span className="poppinsMedium size16 ledtSpaced">-inception (2010)</span>
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