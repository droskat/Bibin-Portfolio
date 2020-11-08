import React from 'react';
import './header.css';
import PropTypes from 'prop-types'
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends React.Component {
  
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

  render() {
    var {location} = this.props
    if(!location)
    location = window.location;
    console.log(location)
    const skillColor = location.pathname === '/Skills' ? { background: '#00c0D9', color:'black'} : { background: '#151515' }
    const projectColor = location.pathname === '/Projects' || location.pathname === '/Projects/1' || location.pathname === '/Projects/2'|| location.pathname === '/Projects/3' ? { background: '#f5cc34', color:'black'} : { background: '#151515' }
    const achColor = location.pathname === '/Achievements' ? { background: '#ff8900', color:'black'} : { background: '#151515' }
    const aboutColor = location.pathname === '/About' ? { background: '#84fe74', color:'black'} : { background: '#151515' }


    return <Navbar collapseOnSelect expand="lg" className= "header-Color" variant="light">
    <Navbar.Brand href="/Projects">BIBIN JOSE</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-dark" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Nav.Link href="/Projects" style={projectColor}>PROJECTS</Nav.Link>
        <Nav.Link eventKey={2} href="/Skills" style={skillColor}>
          SKILLS
        </Nav.Link>
        <Nav.Link href="/Achievements" style={achColor}>ACHIEVEMENTS</Nav.Link>
        <Nav.Link href="/About" style={aboutColor}>ABOUT ME</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  }
}