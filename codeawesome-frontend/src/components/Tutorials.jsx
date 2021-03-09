import React,{useEffect,useState} from 'react'
import Card from 'react-bootstrap/Card'
import { Row} from 'reactstrap';
import {Button} from 'react-bootstrap'
import './About.css'
function Tutorials() {
    const [tuts,setTuts] = useState([{
        tutsimage:"",
        tutsname:"",
        tutscontent:"",
        tutsbuttonlinkyt:"",
        tutsbuttonlinkgithub:""
    }])
    useEffect(()=>{
        fetch("/readTuts").then(
            res=>{
                if(res.ok){
                    return res.json()
                }
            }
        ).then(jsonRes=>setTuts(jsonRes))
    })
    return (

            <div id="Card" className="container-fluid col-10 mx-auto">
                 <Row gy="3" style={{paddingTop:"5%",justifyContent:"space-around"}}>
                    {tuts.map(tut=>
                    <div><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={tut.tutsimage} />
                        <Card.Body>
                            <Card.Title>{tut.tutsname}</Card.Title>
                            <Card.Text>{tut.tutscontent}</Card.Text>
                            <Button variant="outline-info" style={{paddingLeft:"10px",borderRadius:"20px"}} href={tut.tutsbuttonlinkyt} target="_blank">Youtube Link</Button>
                            <Button variant="outline-info" style={{paddingLeft:"10px",borderRadius:"20px"}} href={tut.tutsbuttonlinkgithub} target="_blank">GitHub Link</Button>
                        </Card.Body>
                    </Card>
                    <br />
                    </div>
                    )}
                </Row>
            </div>

    )
}

export default Tutorials
