import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { Row,Container} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
function DashBoard() {
    const [tutorialCards,setTutorialCards]=useState({
        tutsimage:"",
        tutsname:"",
        tutscontent:"",
        tutsbuttonlinkyt:"",
        tutsbuttonlinkgithub:"",
        
    })  
    const [projectCards,setProjectCards]=useState({
        projectimage:"",
        projectname:"",
        projectcontent:"",
        projectbuttonlinkyt:"",
        projectbuttonlinkgithub:"",
    })
    function InputEvent(event){
        const {name,value}=event.target
        setTutorialCards((preVal)=>{
            return{
                ...preVal,
                [name]:value
            }
        })
    }
    function InputEvent2(event){
        const {name,value}=event.target
        setProjectCards((preVal)=>{
            return{
                ...preVal,
                [name]:value
            }
        })
    }
    function TutsSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:8080/tutorials",tutorialCards)
        toast.dark('Tutorial Card Made!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }); 
    }
    function ProjectSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:8080/projects",projectCards)
        toast.dark('Project Card Made!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }); 
    }
    const imgcardstuts = `${tutorialCards.tutsimage}`
    
    return (
        <div className="my-5">
            <h1 className="text-center" style={{fontWeight:"bolder",color:"black"}}>DashBoard</h1>
            <Container>
                <Row style={{paddingBottom:"30px"}}>
                    <div className="col-md-6 col-10 ">
                        <h4>Enter Tutorial Cards Credentials</h4>
                        <Form onSubmit={TutsSubmit}>
                            <Form.Group controlId="formBasicImage">
                                <Form.Label>Image Url For Tutorial Card</Form.Label>
                                <Form.Control type="String" required={true} placeholder="Enter Image URL" name="tutsimage" value={tutorialCards.tutsimage} onChange={InputEvent} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCardName">
                                <Form.Label>Enter Tutorial Name</Form.Label>
                                <Form.Control type="String" required={true} placeholder="Enter Tutorial Name" name="tutsname" value={tutorialCards.tutsname} onChange={InputEvent}  />
                            </Form.Group>
                            <Form.Group controlId="formBasicCardContent">
                                <Form.Label>Enter Tutorial Content For Card</Form.Label>
                                <Form.Control type="String" required={true} placeholder="Enter Tutorial Content For Card" name="tutscontent" value={tutorialCards.tutscontent} onChange={InputEvent}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCardButton">
                                <Form.Label>Enter Redirection Link Of Youtube For A Button</Form.Label>
                                <Form.Control type="String" required={true} placeholder="Enter Redirection Link Of Youtube For A Button"  name="tutsbuttonlinkyt" value={tutorialCards.tutsbuttonlinkyt} onChange={InputEvent}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCardButtonGit">
                                <Form.Label>Enter Redirection Link Of Github For A Button</Form.Label>
                                <Form.Control type="String" required={true} placeholder="Enter Redirection Link Of Github For A Button" name="tutsbuttonlinkgithub" value={tutorialCards.tutsbuttonlinkgithub} onChange={InputEvent} />
                            </Form.Group>
                            <Button variant="outline-info" type="Submit" style={{paddingLeft:"10px",borderRadius:"20px"}}>
                                Submit
                            </Button>
                        </Form>
                    </div>    
                    <div style={{paddingLeft:"20px"}}>
                        <h2>Preview of Tutorial's Card</h2>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imgcardstuts} />
                            <Card.Body>
                                <Card.Title>{tutorialCards.tutsname}</Card.Title>
                                <Card.Text>{tutorialCards.tutscontent}</Card.Text>
                                <Button variant="outline-info" style={{paddingLeft:"10px",borderRadius:"20px"}} href={tutorialCards.tutsbuttonlinkyt} target="_blank">Youtube Link</Button>
                                <Button variant="outline-info" style={{paddingLeft:"10px",borderRadius:"20px"}} href={tutorialCards.tutsbuttonlinkgithub} target="_blank">GitHub Link</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row style={{borderTop:"1px solid black",paddingTop:"30px"}}>
                    <div className="col-md-6 col-10 ">
                        <h4>Enter Projects Cards Credentials</h4>
                        <Form onSubmit={ProjectSubmit}>
                            <Form.Group controlId="formBasicImage">
                                <Form.Label>Image Url For Projects Card</Form.Label>
                                <Form.Control type="String" required={true} placeholder="Enter Image URL" name="projectimage" value={projectCards.projectimage} onChange={InputEvent2} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCardName">
                                <Form.Label>Enter Projects Name</Form.Label>
                                <Form.Control type="String" required={true} placeholder="Enter Projects Name" name="projectname" value={projectCards.projectname} onChange={InputEvent2}  />
                            </Form.Group>
                            <Form.Group controlId="formBasicCardContent">
                                <Form.Label>Enter Projects Content For Card</Form.Label>
                                <Form.Control type="String" required={true} placeholder="Enter Projects Content For Card" name="projectcontent" value={projectCards.projectcontent} onChange={InputEvent2}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCardButton">
                                <Form.Label>Enter Redirection Link Of Youtube For A Button</Form.Label>
                                <Form.Control type="String" required={true} placeholder="Enter Redirection Link Of Youtube For A Button"  name="projectbuttonlinkyt" value={projectCards.projectbuttonlinkyt} onChange={InputEvent2}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCardButtonGit">
                                <Form.Label>Enter Redirection Link Of Github For A Button</Form.Label>
                                <Form.Control type="String" required={true} placeholder="Enter Redirection Link Of Github For A Button" name="projectbuttonlinkgithub" value={projectCards.projectbuttonlinkgithub} onChange={InputEvent2} />
                            </Form.Group>
                            <Button variant="outline-info" type="Submit" style={{paddingLeft:"10px",borderRadius:"20px"}}>
                                Submit
                            </Button>
                        </Form>
                    </div>    
                    <div style={{paddingLeft:"20px"}}>
                        <h2>Preview of Projects's Card</h2>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={projectCards.projectimage} />
                            <Card.Body>
                                <Card.Title>{projectCards.projectname}</Card.Title>
                                <Card.Text>{projectCards.projectcontent}</Card.Text>
                                <Button variant="outline-info" style={{paddingLeft:"10px",borderRadius:"20px"}} href={projectCards.projectbuttonlinkyt} target="_blank">Youtube Link</Button>
                                <Button variant="outline-info" style={{paddingLeft:"10px",borderRadius:"20px"}} href={projectCards.projectbuttonlinkgithub} target="_blank">GitHub Link</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
            <ToastContainer />
        </div>
    )
}

export default DashBoard
