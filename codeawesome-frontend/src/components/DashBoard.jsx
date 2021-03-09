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
        tutsbuttonlinkgithub:""
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
    function TutsSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:8080/tutorials",tutorialCards)
        toast.dark('Card Made!', {
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
                <Row>
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
            </Container>
            <ToastContainer />
        </div>
    )
}

export default DashBoard
