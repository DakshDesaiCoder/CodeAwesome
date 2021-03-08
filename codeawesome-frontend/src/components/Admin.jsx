import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import { Row,Container} from 'reactstrap';
function Admin() {
    const [data,setData]=useState({
        email:"",
        password:''
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
        axios.post("http://localhost:8080/login",data).then(()=>{
            window.location.reload(); 
        })

    }        
    return (
        <div className="my-5">
            <h1 className="text-center" style={{fontWeight:"bolder",color:"black"}}>Admin Page</h1>
            <Container>
                <Row>
                    <div className="col-md-6 col-10 mx-auto">
                    <Form onSubmit={formSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required={true} name="email" value={data.email} onChange={InputEvent} />
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Password" placeholder="Password" required={true} name="password" value={data.password} onChange={InputEvent}/>
                        </Form.Group>                        
                        <Button variant="outline-info"  type="Submit" style={{borderRadius:"20px"}}>
                            Submit
                        </Button>
                    </Form>
                    </div>
                </Row>    
            </Container> 
        </div>
    )
}

export default Admin
