import React from 'react'
import Card from 'react-bootstrap/Card'
import { Row} from 'reactstrap';
import './About.css'
function About() {
    return (
        <>
        <div className="container-fluid col-10 mx-auto" style={{float:"top", borderRadius:"0px 25px 0px 25x"}}>
        <h1 style={{textAlign:"center", color: 'cyan'}}>Members Of CodeAwesome</h1>
        </div>
        <div id="Card" className="container-fluid col-10 mx-auto">
            <Row gy="3" style={{paddingTop:"5%",justifyContent:"space-evenly"}}>
            <Card style={{ width:"18rem",borderRadius:"0px 25px 0px 25px"}} className="cards">
    <Card.Body >
        <Card.Title>Daksh Desai</Card.Title>
       
        <Card.Text>
            Hi I am Daksh Desai a student and expert in MERN Stack. I will help you learn MERN stack very easily. MERN is one of the fastest growing tech stacks used in the industry of web development. So, let's gooo!!!!!!
        </Card.Text>
        <Card.Link href="https://github.com/DakshDesaiCoder" target="_blank">Github</Card.Link>
    </Card.Body>
    </Card>
    <Card style={{ width:"18rem",borderRadius:"0px 25px 0px 25px" }} className="cards">
    <Card.Body>
        <Card.Title>Manan Gandhi</Card.Title> 
       
        <Card.Text>
            Hello, I am Manan Gandhi, a student, and a programming enthusiast. I will be teaching you about Python, Java and Flutter. I also be helping you in making some awesome projects. Are you ready?
        </Card.Text>
        <Card.Link href="https://github.com/MananPyJava" target="_blank">Github</Card.Link>
    </Card.Body>
    </Card>
    <Card style={{width:"18rem",borderRadius:"0px 25px 0px 25px"   }} className="cards">
    <Card.Body>
        <Card.Title>Harshil Parikh</Card.Title>
       
        <Card.Text>
            Hello! I am Harshil Parikh, a creative person who likes to build graphical interfaces. I will be teaching you the fundamental concepts of web development- HTML, CSS and Javascript. Get ready to learn!!
        </Card.Text>
        <Card.Link href="https://github.com/TurboCoder21" target="_blank">Github</Card.Link>
    </Card.Body>
    </Card>
            </Row>
    
    </div> </>
    )
}

export default About
