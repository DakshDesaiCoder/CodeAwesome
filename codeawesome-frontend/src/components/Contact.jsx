import React, { useState } from 'react'
import { Row,Container} from 'reactstrap';
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
const Contact=() => {
    const [data,setData]=useState({
        email:"",
        fullname:'',
        msg:""
    })
    function InputEvent(event){
        const {name,value}=event.target
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value
            }
        })
    }
    function formSubmit(event){
        event.preventDefault()
        toast.dark('Message Has Been Sent!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        axios.post("http://localhost:8080/create",data)        
    }
    return (
        <>
        <div className="my-5">
            <h1 className="text-center" style={{fontWeight:"bolder",color:"black"}}>Contact Us</h1>
            <Container>
                <Row>
                    <div className="col-md-6 col-10 mx-auto">
                    <Form onSubmit={formSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required={true} name="email" value={data.email} onChange={InputEvent} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="Name" placeholder="Name" required={true} name="fullname" value={data.fullname} onChange={InputEvent} />
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="String" placeholder="Message" required={true} name="msg" value={data.msg} onChange={InputEvent}/>
                        </Form.Group>                        
                        <Button variant="outline-info" type="Submit" style={{borderRadius:"20px"}}>
                            Submit
                        </Button>
                    </Form>
                    </div>
                </Row>    
            </Container> 
        </div>
        <ToastContainer />
        </>
    )
}

export default Contact