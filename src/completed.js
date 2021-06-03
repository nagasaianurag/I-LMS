import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import {Row,Col}from 'react-bootstrap';
import {Card,CardColumns}from 'react-bootstrap';
import programdata from "./program_data";
import Nav from "./nav";
import './App.css';

function Completed(props){
    return(
        <div>
<p className="ongoing">Completed Courses<hr></hr></p>

    <div class="container">
     <CardColumns>
<a href="/course">
  <Card style={{ width: '28rem', backgroundColor:"blue",color:"white"}} >
  <Card.Body style={{fontWeight:"bold",textAlign:"center"}}>{props.name}
  </Card.Body>
</Card>
</a>
</CardColumns>

</div>

</div>
    )
    
}
export default Completed;