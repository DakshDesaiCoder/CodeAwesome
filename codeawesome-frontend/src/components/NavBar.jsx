import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div className="container-fluid nav bg">
                <div className="col-10 mx-auto">
                    <Navbar bg="white" expand="lg">
                        <Navbar.Brand as={Link} to="/" style={{color:"turquoise",fontWeight:"bolder",fontSize:"1.9rem"}}>CodeAwesome</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav id="nav" className="ml-auto mb-2 mb-lg-0">
                                <Nav.Link style={{fontSize:"1.3rem",fontWeight:"bold"}} as={Link} to="/">Home</Nav.Link>
                                <Nav.Link style={{fontSize:"1.3rem",fontWeight:"bold"}} as={Link} to="/tutorials">Tutorials</Nav.Link>                                
                                <Nav.Link style={{fontSize:"1.3rem",fontWeight:"bold"}} as={Link} to="/projects">Projects</Nav.Link>
                                <Nav.Link style={{fontSize:"1.3rem",fontWeight:"bold"}} as={Link} to="/about">About</Nav.Link>
                                <Nav.Link style={{fontSize:"1.3rem",fontWeight:"bold"}} as={Link} to="/contact">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
    )
}

export default NavBar
