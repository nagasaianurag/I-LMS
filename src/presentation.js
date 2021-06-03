// const presentation=programdata.map(item =>{
//     console.log(item.endDate)
//     console.log(this.state.currentDate)

//     if(item.courseName=='Presentations'){
//       return(
//       <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
//           <Presentations key={item._id} name={item.courseName}  url={item.url} onClick={this.Click} />
//       </Col>
//       )
//     } 
//   }
//   )
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sem from './sem1.js';
import Nav from "./nav.js";
import {Card,CardColumns}from 'react-bootstrap';
import {Row,Col}from 'react-bootstrap';
import HomeComp from "./home.js";
import Home from "./home";
import{Navbar,NavDropdown}from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import Time from "./time";
import reactDom from "react-dom";
import programdata from "./program_data.js";
  function Present(props){
    console.log(props);
   
    return(
      <div>
        <div className="container-fluid">
          
            <a href={props.url}>
            <Card onClick={props.Click} className="presentationcard"  >
              <Card.Body className="presentationname">{props.name}</Card.Body>
            </Card>
            </a>
          
        </div>
      </div>
    )
  }
  export default Present;