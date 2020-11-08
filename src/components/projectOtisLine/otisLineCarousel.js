import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import TableView from '../../assets/Expertportal/TableView.png';
import UnitPage from '../../assets/Expertportal/UnitView.png';
import DetailedView from '../../assets/Expertportal/detailedview.png';
import ActiveMonitoring from '../../assets/Expertportal/active_monitoring.png';
import CustomTabs from '../../assets/Expertportal/Customizable_tabs.png';
import DataPattern from '../../assets/Expertportal/data_pattern.png';
import ModularFrame from '../../assets/Expertportal/modular_framework.png';
import TImelines from '../../assets/Expertportal/hrtimeline.png';
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
            <h3 className="centerHeader centeredMain colouredHeader poppinsBold size16">ONE Xpert Portal</h3>
            <h5 className="colouredHeader">Brief:</h5>
            <p className ="poppinsMedium size16 listContent">Conceptualise and design the dashboard for maintenance experts where they can monitor and track next Gen
                OTIS connected equipments. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span
            className="d-block carouselItem"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h5 className="colouredHeader poppinsBold size16" >Primary Challenge</h5>
            <ul>
                <li className="listContent poppinsMedium size16">Since the concept of remote monitoring was  relatively new in OTIS the users did not have a clear expectation,
                  which pushed us to initially design the application based on our understanding and some references with other 
                  dashboards</li>
                  <li className="listContent poppinsMedium size16">While developing the application we quickly realised countries had there own way of looking at data and 
there was a need to have a framework that was highly customisable. </li>
                  <li className="listContent poppinsMedium size16">We had to innovate proactively in lot of instances on user interaction methods to improvise navigation and 
help  users pin point anomalies especially on graphs and charts.</li>
            </ul>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span
            className="d-block carouselItem"
            alt="Fourth slide"
          />
      
          <Carousel.Caption>
            <h3 className="colouredBackground centered poppinsBold size16">Responsibilities</h3>

            <div className="flexRow">
              <div className= "leftlist">
                <span className="colouredHeader poppinsMedium size16">With Business Analyst :</span>
                <ul>
                    <li className="listContent poppinsMedium size16">Connect with the BA on a daily basis to discuss
                        on new requirements and ideate on the designs
                        and prototypes</li>
                      <li className="listContent poppinsMedium size16">Discuss on the tickets raised during UAT Testing
                        and approaches to solve it</li>
                      <li className="listContent poppinsMedium size16">Discuss any challenges faced on current sprint</li>
                </ul>
              </div>
              <div className= "rightlist">
                <span className="colouredHeader poppinsMedium size16">With Product Owner(Client side):</span>
                <ul>
                    <li className="listContent poppinsMedium size16">Connect with the product owner on bi-weekly
                          basis, walk him through the new designs and 
                          Prototypes developed for the new requirements</li>
                      
                      <li className="listContent poppinsMedium size16">Understanding and noting the Product owner’s
                          experience on using the current release and 
                          identifying the pain points/improvements.</li>
                </ul>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span
            className="d-block carouselItem"
            alt="Fifth slide"
          />
      
          <Carousel.Caption>
            <h3 className="colouredBackground centered poppinsBold size16">Responsibilities</h3>

            <div className="flexRow">
              <div className= "leftlist">
                <span className="colouredHeader listContent poppinsMedium size16">With End Users :</span>
                <ul>
                    <li className="listContent poppinsMedium size16">Connect with select Experts(users) on a weekly basis
                        based on region (APAC,Europe,NAA), and discuss on 
                        feedback of the current release.</li>
                      <li className="listContent poppinsMedium size16">Identifying any issues faced by the them during use of
                        application and getting suggestions.</li>
                      <li className="listContent poppinsMedium size16">Showing the features of future releases and understand
                        their expectations/feedback.</li>
                </ul>
              </div>
              <div className= "rightlist">
                <span className="colouredHeader listContent poppinsMedium size16">With Engineers:</span>
                <ul>
                    <li className="listContent poppinsMedium size16">Explaining workflow and feature functionality
                        to estimate story points.</li>
                      
                    <li className="listContent poppinsMedium size16">Transferring visual assets for them to develop
                        the assigned screens</li>
                    <li className="listContent poppinsMedium size16" >Discussing alternate methods to execute a 
                        functionality in case of performance/feasiblity
                        issues.</li>
                </ul>
              </div>
            </div>
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
                    <img alt="img"src = {TableView}/>
                    <figcaption className="poppinsMedium size16">Table View</figcaption>
                </figure>
                <figure>
                    <img  alt="img" src = {UnitPage}/>
                    <figcaption className="poppinsMedium size16">Unit View</figcaption>
                </figure>
                <figure>
                    <img alt="img" src = {DetailedView}/>
                    <figcaption className="poppinsMedium size16">Detailed View</figcaption>
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
                    <img alt="img" src = {ActiveMonitoring}/>
                </figure>
                <div className="flexColumn">
                <p className="colouredHeader listContent poppinsMedium size16">Active Monitoring Buckets :</p>

                    <p className= "listContent poppinsMedium size16">List view has active monitoring
                    buckets to list units that need 
                    Immediate attention as well
                    those units which are under 
                    observation</p>
                </div>
                
                <figure>
                    <img alt="img" src = {CustomTabs}/>
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
                    <img alt="img" src = {ModularFrame}/>
                </figure>
                <div className="flexColumn spoaced">
                <p className="colouredHeader listContent poppinsMedium size16">Modular Framework</p>

                     <p className= "listContent poppinsMedium size16"> Modular Widget based unit page framework allows for
                      really responsive layout, with high level of customization. 
                      Users can add/delete/drag/resize widgets based on their preferences. 
                      This also facilitate in a modular UI where we can select to hide or 
                      show features based on region and platform type.   </p>
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
                    <img alt="img" src = {TImelines}/>
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
                    <img alt="img" src = {DataPattern}/>
                </figure>
                <div className="flexColumn spoaced">
                    <p className="colouredHeader listContent poppinsMedium size16">Deep Understanding of Data and visualising Data Patterns</p>
                      <p className="listContent poppinsMedium size16">Understanding the operational methodologies of Experts, understanding the Data and
                      visualising Data patterns accordingly for more accurate and faster troubleshooting. This
                      also allows for experts even with lower experience to have the  same level of accuracy.</p>
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