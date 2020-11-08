import React from 'react';
import './otisPortal.css';
import IntroLogo from '../../assets/apiportal/apiportal.png';
import Initialscreens from '../../assets/apiportal/initialscreens.png';
import ColorCode from '../../assets/apiportal/color_code.png';
import Image1 from '../../assets/apiportal/Image4.png';
import Image2 from '../../assets/apiportal/Image5.png';
import Image3 from '../../assets/apiportal/Image6.png';
import Image4 from '../../assets/apiportal/Image7.png';
import Icons from '../../assets/apiportal/iconography.png';
import Fidelity from '../../assets/apiportal/high-fedelity_bg.png';
import Fidelity1 from '../../assets/apiportal/email_verification.png';
import Fidelity2 from '../../assets/apiportal/API_page.png';
import Fidelity3 from '../../assets/apiportal/signin.png';
import Fidelity4 from '../../assets/apiportal/email2.png';
import Fidelity5 from '../../assets/apiportal/homepage.png';
import Fidelity6 from '../../assets/apiportal/Product_page.png';
import Responsive from '../../assets/apiportal/responsive.png';
import Responsive2 from '../../assets/apiportal/mobile.png';
import Responsive3 from '../../assets/apiportal/desktop.png';
import Fonts from '../../assets/fonts.png'
export default class OtisPortal extends React.Component {
  render() {
    return (
        <div className= "midContentPortal">
            <div className ="otisPortalMain" style= {{backgroundImage:`url(${IntroLogo})`}}>
                <h3 className="centerAligned poppinsBold size18">Website for developers to access API for a major elevator manufacturer</h3>
                <h5 className="centerAlignedSub poppinsLight size14">Visually update and improve the user experience of an existing API portal page while aligning the brand guidelines and branding. Also, giving it a clean visual feel as most modern websites</h5>
            </div>
            <div className ="otisPortalP nonresponsive flexColumn" style= {{backgroundColor:`#C28F6D`}}>
                <div className ="flexColumn" >
                    <h3 className="centerAlignedSub poppinsBold size30">Initial Screens</h3>
                    <figure>
                        <img alt="img" src = {Initialscreens}/>
                    </figure>
                </div>
                <div className ="flexRow" >
                </div>
                <div className ="flexRow" >
                </div>
            </div>
            <div className ="otisPortalP nonresponsive flexColumn" style= {{backgroundColor:`#151515`}}>
            <h3 className="centerAlignedSub poppinsBold size30">Brand Style Guide</h3>
                <div className ="flexRowPortal" >
                    <div className ="flexColumn" >
                        <h3 className="leftAlignedSub poppinsBold size16">Colors</h3>
                        <figure>
                            <img alt="img"  src = {ColorCode}/>
                        </figure>
                        <h3 className="leftAlignedSub poppinsBold size16">Imagery</h3>
                        <div className ="flexColumn" >
                            <div className ="flexRowNew" >
                                <figure>
                                <img alt="img"  src = {Image1}/>
                                </figure>
                                <figure>
                                <img alt="img"  src = {Image2}/>
                                </figure>
                            </div>
                            <div className ="flexRowNew" >
                                <figure>
                                <img alt="img"  src = {Image3}/>
                                </figure>
                                <figure>
                                <img alt="img"  src = {Image4}/>
                                </figure>

                            </div>
                        </div>
                    </div>
                    <div className ="flexColumn" >
                        <h3 className="leftAligned poppinsBold size16">Typography</h3>
                        <figure>
                            <img alt="img"  src = {Fonts}/>
                        </figure>

                        <h3 className="leftAligned poppinsBold size16">Iconography</h3>
                        <figure>
                            <img alt="img"  src = {Icons}/>
                        </figure>
                    </div>
                </div>
            </div>
            <div className ="otisPortalP flexColumn" style= {{backgroundImage:`url(${Fidelity})`}}>
            <h3 className="centerAlignedSub poppinsBold size30">High Fidelity Prototypes</h3>
                <div className ="flexRow" >
                    <div className ="flexColumn spaceLeft" >
                        <figure>
                            <img alt="img"  className ="image" src = {Fidelity5}/>
                        </figure>
                    </div>
                    <div className ="flexColumn" >
                        <figure>
                            <img alt="img"  className ="image" src = {Fidelity2}/>
                        </figure>
                        <figure>
                            <img alt="img"  className ="image" src = {Fidelity1}/>
                        </figure>
                        <figure>
                            <img alt="img"  className ="image" src = {Fidelity3}/>
                        </figure>
                    </div>
                    <div className ="flexColumn" >
                        <figure>
                            <img alt="img"  className ="image" src = {Fidelity4}/>
                        </figure>
                        <figure>
                            <img alt="img"  className ="image" src = {Fidelity6}/>
                        </figure>
                    </div>

                </div>
            </div>
            <div className ="otisPortalP flexColumn" style= {{backgroundColor:`#151515`}}>
            <h3 className="centerAlignedSub poppinsBold size30">Responsive Design</h3>
                <div className ="flexRowResponse" >
                    <div className ="flexColumn spaceLeft" >
                        <div className ="flexRowPortal2 poppinsMedium size16">
                            <p>Mobile</p><p>Tablet</p><p>Desktop</p>
                        </div>
                        <figure className="spaceright">
                            <img alt="img"  src = {Responsive}/>
                        </figure>
                        <p className= "tispan poppinsMedium size14 listContent">The Designs are compatible with mobile, tablet and desktop<br/> resolutions, with clear defined structure while maintaining<br/> the visual appeal</p>
                    </div>
                    <div >
                        <figure>
                            <img alt="img"  className ="image" src = {Responsive2}/>
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <img alt="img"  className ="image" src = {Responsive3}/>
                        </figure>
                    </div>

                </div>
            </div>
        </div>
    )
    
  }
}