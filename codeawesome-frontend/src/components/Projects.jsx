import React,{useEffect,useState} from 'react'
import Card from 'react-bootstrap/Card'
import { Row} from 'reactstrap';
import {Button} from 'react-bootstrap'
import './About.css'

function Projects() {
    const [projects,setProjects] = useState([{
        projectimage:"",
        projectname:"",
        projectcontent:"",
        projectbuttonlinkyt:"",
        projectbuttonlinkgithub:"",
    }])
    useEffect(()=>{
        fetch("/readProjects").then(
            res=>{
                if(res.ok){
                    return res.json()
                }
            }
        ).then(jsonRes=>setProjects(jsonRes))
    })
    return (
        <div id="Card" className="container-fluid col-10 mx-auto">
        <Row gy="3" style={{paddingTop:"5%",justifyContent:"space-around"}}>
           {projects.map(tut=>
           <div><Card style={{ width: '18rem' }} className="cards">
           <Card.Img variant="top" src={tut.projectsimage} />
               <Card.Body>
                   <Card.Title>{tut.projectsname}</Card.Title>
                   <Card.Text>{tut.projectscontent}</Card.Text>
                   <Button variant="outline-info" style={{paddingLeft:"10px",borderRadius:"20px"}} href={tut.projectsbuttonlinkyt} target="_blank">Youtube Link</Button>
                   <Button variant="outline-info" style={{paddingLeft:"10px",borderRadius:"20px"}} href={tut.projectsbuttonlinkgithub} target="_blank">GitHub Link</Button>
               </Card.Body>
           </Card>
           <br />
           </div>
           )}
       </Row>
   </div>

    )
}

export default Projects
