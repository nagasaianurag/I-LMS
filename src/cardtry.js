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
// import programdata from "./program_data";
import Present from "./presentation.js";
import Semester from "./semester.js";
import ShowcaseCardDemo from "./cardtest";
import StepperDemo  from "./stepper";
import Programcard from "./programcard";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
// import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import StudentProgress from './studentprogress';
    class Trycard extends React.Component{
      constructor(props) {
        super(props);
       
      }
      render(){
        console.log(StudentProgress)
        // const student=StudentProgress.student1.map(item =>{

            return (
              <div>
              {
                
                StudentProgress.student1.map(item =>{})
              }
              </div>
              // <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
              //   <Details key={item._id} name={item.percentage} />
              // </Col>
            )
        // }
        // )
        // console.log(StudentProgress.userList)
        // return(
        //   <div>
        //     {/* <Row> */}
        //     {student} 
        //     {/* </Row> */}
          
        //   </div>
          
        // )
       
      }

    }

//     function Details(props){
//   console.log(props);
 
//   return(
//     <div>
//       <div className="container">
//         <CardColumns>
//           <a >
//           <Card className="procard">
//             <Card.Body className="proname">{props.name}</Card.Body>
//           </Card>
//           </a>
//         </CardColumns>
//       </div>
//     </div>
//   )
// }
export default Trycard;