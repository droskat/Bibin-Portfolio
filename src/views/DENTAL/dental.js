import React from 'react';
import './dental.css';
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Logo from "../../assets/dental2.png"
import Model from "../../assets/model.png"
const Dental = props => {
    return (
      <div className="App">
        <div className= "ParentContainer">

            <div className= "SideLine"></div>
            <div className= "sideHighlight">
                <Header />
                
            </div>
            <div className= "midContentPortal">
            <div className ="otisPortalMain" style= {{backgroundImage:`url(${Logo})`}}>
                <h3 className="centerAligned poppinsBold size18">E-COMMERCE OPPORTUNITY FOR DENTAL SUPPLIES MAJOR</h3>
                <h5 className="centerAlignedSub poppinsMedium size16">Consult several dentists and vendors across India to understand the dental supply business model and evaluate the possibility for direct to customer
online sales model for a major dental supplies company. </h5>
            </div>
            <br/>
            <br/>
            <div className= "textContent">
                <div className ="flexColumn">
                    <h4 className="poppinsBold size16 colouredHeader">
                        Project Brief
                    </h4>
                    <p  className="poppinsMedium size16">Consult dentists and suppliers across Tier 1 and Tier 2 cities across India to understand the dental supplies supply model and explore the opportunity of an online sale model.</p>
                </div>
                <br/>
            <br/>
                <div className ="flexColumn commonMargin">
                    <h4 className="poppinsBold size16 colouredHeader">
                        Process :
                    </h4>
                    <div className ="flexRowDental">
                        <div className ="flexColumn">
                            <h5 className="poppinsMedium size16">
                                Step 1 :
                            </h5>
                            <p className="poppinsLight size16">Consult dentist and vendors across India and classify them according to their usage and experience patterns.</p>
                        </div>
                        <div className ="flexColumn">
                            <h5 className="poppinsMedium size16">
                                Step 2 :
                            </h5>
                            <p className="poppinsLight size16">Digitize inputs given by the users and identify user experience pain points and expectations</p>
                        </div>
                        <div className ="flexColumn">
                            <h5 className="poppinsMedium size16">
                                Step 3 :
                            </h5>
                            <p className="poppinsLight size16">Explore existing similar online Portals and identify key pros and cons of the existing model</p>
                        </div>
                        <div className ="flexColumn">
                            <h5 className="poppinsMedium size16">
                                Step 4 :
                            </h5>
                            <p className="poppinsLight size16">Brainstorming with the team on different ideas and coming up with a model which broadly covers all the pain points and projects a better onboarding experience</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>

            <div className ="otisDental">
                    <h5 className="poppinsBold size16 colouredHeader">Proposed Model for the Portal(Partially Whitelabelled)</h5>
                    <br/>
                    <figure>
                        <img alt="img"  src = {Model}/>
                    </figure>
            </div>
            </div>  
          
        </div>
        <Footer />

      </div>
    );
}

export default Dental;
export { default as Dental } from './dental';
