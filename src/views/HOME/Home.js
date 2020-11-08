import React from 'react';
import './Home.css';
import Header from "../../components/header/header"
import MidContent from "../../components/midContent/midContent"
import Footer from "../../components/footer/footer"
const Home = props => {
    return (
      <div className="App">
        <div className= "ParentContainer">

          <div className= "SideLine"></div>
          <div className= "sideHighlight">
            <Header />
            
          </div>
          <MidContent />
          
        </div>
        <Footer />

      </div>
    );
}

export default Home;
export { default as Home } from './Home';
