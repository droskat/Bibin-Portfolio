import React from 'react';
import './footer.css';
import  Orange  from '../../assets/brush_orange.svg';
import Blue  from '../../assets/brush_blue.svg';
import Green  from '../../assets/brush_green.svg';
import Yellow  from '../../assets/brush-yellow.svg';
// import Mailto from 'react-mailto';

export default class Footer extends React.Component {
  render() {
    var local = window.location;
    console.log(local.pathname)
    var footerLogo = local.pathname === '/Skills' ? Blue :local.pathname === '/Projects'|| local.pathname === '/Projects/1'|| local.pathname === '/Projects/2' || local.pathname === '/Projects/3' ? Yellow : local.pathname === '/Achievements' ? Orange : '/About' ? Green : Yellow
    footerLogo = <img alt="img" src= {footerLogo} />
    return <div className="footer">
      <div className = "footerContainer">
        
        {footerLogo}
        <span className="footerText footerConditional">The Nerd with a paint Brush&copy;</span>
      </div>
      <div className = "footerRight">
      <a className="footerText" rel="noopener noreferrer" target="_blank" href="mailto:nerdwithapaintbrush@gmail.com">
      nerdwithapaintbrush@gmail.com</a>
      </div>
    </div>

  }
}