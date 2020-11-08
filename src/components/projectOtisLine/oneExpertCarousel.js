import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import TableView from '../../assets/otisline/TableView.png';
import UnitPage from '../../assets/otisline/unitpage.png';
import ActiveMonitoring from '../../assets/otisline/active_monitoring.png';
import CustomTabs from '../../assets/otisline/Customizable_tabs.png'
import RealView from '../../assets/otisline/realtime_view.png';
import SPA from '../../assets/otisline/single-pagelayout.png';
import Timelines from '../../assets/otisline/timeline.png';
export default class OtisLineCarousel extends React.Component {
    
    
    render() {
    return (
        <Carousel>
        <Carousel.Item>
          <span
            className="d-block carouselItem"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="centerHeader centeredMain colouredHeader poppinsBold size16 listContent">OTISLine</h3>
            <h5 className="colouredHeader poppinsMedium size16">Brief:</h5>
            <p className="poppinsMedium size16 listContent">To build a subset application of OXP(ONE Xpert portal)  for OTIS customer care centre to quickly check on the 
status of the equipment and take necessary action.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span
            className="d-block carouselItem"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h5 className="colouredHeader centeredMain poppinsBold size16 listContent" >Primary Challenge</h5>
            <ul>
                <li className="listContent poppinsMedium size16 listContent">Customer care executives have a target to close a call in 20 seconds, so it was critical to build a single page application with 
                    just the right amount of information. </li>
            </ul>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span
            className="d-block carouselItem"
            alt="Sixth slide"
          />
      
          <Carousel.Caption>
            <h3 className="colouredHeader poppinsBold size16">Dashboard Flow</h3>
            <div className="flexRowAround">
                <figure>
                    <img alt="img"  src = {TableView}/>
                    <figcaption className="poppinsMedium size16">Table View</figcaption>
                </figure>
                <figure>
                    <img alt="img"  src = {UnitPage}/>
                    <figcaption className="poppinsMedium size16">Unit View</figcaption>
                </figure>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span
            className="d-block carouselItem"
            alt="Seventh slide"
          />
      
          <Carousel.Caption>
            <h3 className="colouredHeader poppinsBold size16">Key Design Innovations</h3>
            <div className="flexRow">
                <figure>
                    <img alt="img"  src = {ActiveMonitoring}/>
                </figure>
                <div className="flexColumn">
                <p className="colouredHeader listContent poppinsMedium size16">Active Monitoring Buckets :</p>

                    <p className= "listContent poppinsMedium size16">Failing Equipments can be 
                        Identified in advance so that
                        Pro-active steps can be taken 
                        at the same time the customer
                        Is notified</p>
                </div>
                
                <figure>
                    <img alt="img"  src = {CustomTabs}/>
                </figure>
                <div className="flexColumn">
                <p className="colouredHeader listContent poppinsMedium size16">Customizable Table</p>

                    <p className="listContent poppinsMedium size16" >List columns are customizable
                        for user preferences. User can
                        Add/delete/drag columns 
                        Based on their preferences.</p>
                </div>
               
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span
            className="d-block carouselItem"
            alt="Eighth slide"
          />
      
          <Carousel.Caption>
            <h3 className="colouredHeader poppinsBold size16">Key Design Innovations</h3>
            <div className="flexRow">
                <figure>
                    <img alt="img"  src = {SPA}/>
                </figure>
                <div className="flexColumn spoaced">
                <p className="colouredHeader listContent poppinsMedium size16">Single-page Layout</p>

                     <p className= "listContent poppinsMedium size16"> User have a responsibility to respond to as many calls as possible, so it was important for them to quickly through a unit (under a minute). So we visualised a single page layout with just the absolute important details, enough for the users to take a call.  </p>
                </div>
                
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span
            className="d-block carouselItem"
            alt="Ninth slide"
          />
      
          <Carousel.Caption>
            <h3 className="colouredHeader poppinsBold size16">Key Design Innovations</h3>
            <div className="flexRow">
                <figure>
                    <img alt="img"  src = {Timelines}/>
                </figure>
                <div className="flexColumn spoaced">
                  <p className="colouredHeader listContent poppinsMedium size16">24 Timeline Visualization</p>

                    <p className="listContent poppinsMedium size16">We color coded the  Operational modes based on priority
                    Basis and used it to create 24hr timeline of the unit activity</p>
                </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span
            className="d-block carouselItem"
            alt="Tenth slide"
          />
      
          <Carousel.Caption>
            <h3 className="colouredHeader poppinsBold size16">Key Design Innovations</h3>
            <div className="flexRow">
                <figure>
                    <img alt="img"  src = {RealView}/>
                </figure>
                <div className="flexColumn spoaced">
                    <p className="colouredHeader listContent poppinsMedium size16">Real time View</p>
                      <p className="listContent poppinsMedium size16">Visualisation of the realtime status and position of the Equipment helps the users to
                        have an idea on the status of the equipment while they are helping out a concerned
                        customer</p>
                </div>
                
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span
            className="d-block carouselItem"
            alt="Eleventh slide"
          />
      
          <Carousel.Caption>
            <h3 className="colouredHeader centeredMain poppinsMedium size16">
                Actual wireframes and exact details were not shown due to confidentiality reasons.
                However, I’ll be more than happy to talk more about the project in-person. </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span
            className="d-block carouselItem"
            alt="Eleventh slide"
          />
      
          <Carousel.Caption>
            <h3 className="centeredMain poppinsMedium size16">To attain certainty<br/>
                  You need great predictions<br/>
                  Great predictions need a  <tag className="coloredText">lot of Data</tag> </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}