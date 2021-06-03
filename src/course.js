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
class Course extends React.Component{
  constructor(props) {
    super(props);
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

      this.state = {
        items: null,
        loading: true,
        currentDate: date,

        // startDate:"2021-04-25T00:00",
        // endDate:"2021-05-14T20:39"
      }
      // this.handleClick = this.handleClick.bind(this)
  }

  // componentDidMount() {
  //   fetch('https://raw.githubusercontent.com/yelakantisunder/backend/main/courses.json')
  //   // fetch('https://raw.githubusercontent.com/iiit-msit/ProgramManagement/branch1/program.json?token=ARBLSQJE2NRGKNMYEGME6WTAV7C4E')
  //     .then(response => response.json())
  //     .then(data => this.setState({ items:data,loading:false }));
  // }
  Click(){
    console.log("hii")
    alert("hi")
  }
  render(){
    // const { items } = this.state;
    // if (this.state.loading) {
    //   return <div><CircularProgress/></div>;
    // } 
    // else if(this.state.currentDate>)
    // else {
      const Upcomingpro=programdata.map(item =>{
        console.log(item.endDate)
        console.log(this.state.currentDate)
     
        if(item.startDate>this.state.currentDate){
          return (
            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
              <CourseName key={item._id} name={item.courseName}  url={item.url} date={item.startDate} onClick={this.Click} />
            </Col>
          )
        } 
      }
      )
      const semproIT=programdata.filter(sem=>sem.semester=="1").map(item =>{
      console.log(item.endDate)
      console.log(this.state.currentDate)
      // console.log(this.state.currentDate.getMonth())
      if(item.endDate<this.state.currentDate &&  item.courseType=="IT"){
        return(
                // <Col >
                    <ShowcaseCardDemo key={item._id} name={item.courseName}  date={item.startDate} image={item.image} url={item.url} onClick={this.Click} />
                // </Col>
                )
        // const it=(()=>{
        //   if(item.courseType=="IT"){
        //     return(
        //       <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
        //           <CourseName key={item._id} name={item.courseName}  url={item.url} onClick={this.Click} />
        //       </Col>
        //       )
        //   }
         
        // }
          
        //   )
     
      }
    } 
    )
    const semproSS=programdata.filter(sem=>sem.semester=="1").map(item =>{
      console.log(item.endDate)
      console.log(this.state.currentDate)

      if(item.endDate<this.state.currentDate &&  item.courseType=="SS"){
        return(
                // <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
                    <ShowcaseCardDemo key={item._id} name={item.courseName}  date={item.startDate} image={item.image} url={item.url} onClick={this.Click} />
                // </Col>
                )
      }
    } 
    )
   const Ongoingpro=programdata.map(item =>{
    console.log(item.endDate)
    console.log(this.state.currentDate)

    if(item.endDate>this.state.currentDate && item.startDate<this.state.currentDate && item.courseName!="Presentations"){
      return(
      <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
          <CourseName key={item._id} name={item.courseName}  url={item.url} onClick={this.Click} />
      </Col>
      )
    } 
  }
  )
  const presentation=programdata.map(item =>{
    console.log(item.endDate)
    console.log(this.state.currentDate)

    if(item.courseName=='Presentations'){
      return(
      <Col>
          <Present key={item._id} name={item.courseName}  url={item.url} onClick={this.Click} />
      </Col>
      )
    } 
  }
  )
    //  const sempro=items.map(item =>{
  const element = (
    <React.Fragment>
      {/* <div class="float-container"> */}
      
        {/* <div class="float-child-time">
          <div><Time/></div>
        </div> */}
        {/* <Sem></Sem> */}
        <br></br>
        <div class="float-child">
        <div>{semproIT}</div>
        {/* {(() => {
          console.log(programdata)
          const IT=[]
          for(let i=0;i<programdata.length;i++){
            if(programdata[i].courseType=="IT"){
              IT.push(programdata[i].courseName)
              console.log(IT)
              // return <div>{sempro}</div>
            }
          }
          return(IT)
          
          // console.log(IT.push(programdata[i].courseName))
        // switch (programdata.courseType) {
          
        //   case "IT":   return <div>{sempro}</div>;
        // }
      })()} */}
          
        </div>

        <div class="float-child-ss">
          <div>{semproSS}</div>
        </div>
        
      {/* </div> */}
    </React.Fragment>
  )

  return(
    <div>
      <Nav />
      <div className="container-fluid">
        <h3 className="ongoing">Ongoing Courses&nbsp;&nbsp;</h3>
        <Row> {Ongoingpro} </Row>
      </div>
      <div className="container-fluid">
        <h3 className="ongoing">1st year&nbsp;&nbsp;</h3>
        <div className="presentationCard"> {presentation}</div><br></br>

        <div class="float-child-time"> 
          <StepperDemo/>
        </div>
        
      <Card className="semcard"  >
        <Card.Body className="semname">Semester-1</Card.Body>
      </Card>
     
      <Row> {element} </Row>
      <Card className="semcard"  >
        <Card.Body className="semname">Semester-2</Card.Body>
      </Card>
      <Sem></Sem>
      <Card className="semcard"  >
        <Card.Body className="semname">Semester-3</Card.Body>
      </Card>
        <Semester></Semester>
        
     
        {/* <Sem></Sem> */}
        {/* <Row> {element} </Row> */}
      </div>
      <br></br>
      <div className="container-fluid">
        <h3 className="ongoing">Upcoming Courses&nbsp;&nbsp;</h3>
        <Row> {Upcomingpro} </Row>
      </div><br></br><br></br>
    </div>
    )
// }
}
}
function CourseName(props){
  console.log(props);
 
  return(
    <div>
      <div className="container">
        <CardColumns>
          <a href={props.url}>
          <Card className="procard"  onClick={props.Click}>
            <Card.Body className="proname">{props.name}</Card.Body>
          </Card>
          </a>
        </CardColumns>
      </div>
    </div>
  )
}

export default Course;


