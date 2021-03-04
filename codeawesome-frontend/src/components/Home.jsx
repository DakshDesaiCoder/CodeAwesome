import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import web from '../images/sv1.svg'
import './Home.css'
function Home() {
    return (
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    < div className="col-10 mx-auto">
                        <div style={{ float: "right", paddingTop: "2%" }}>
                            <img src={web} className="img-fluid animated" alt="home img" width="600" height="600" />
                        </div>
                        <div style={{ paddingTop: "4%" }} className="col-md-6">
                            <h1>Grow Your Skills With <span style={{ color: "#008b8b",height:"10vh"}}><strong>CodeAwesome</strong></span></h1>
                            <h5 className="my-3">We are team of talented coders to help you to improve your coding skills</h5>
                        </div>
                        <div className=" col-md-6 mt-3">
                            <Button variant="outline-info" as={Link} to="/tutorials" style={{ borderRadius: "20px" }}>Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home
