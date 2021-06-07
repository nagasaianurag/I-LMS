import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sem from './sem1.js';
import Nav from "./nav.js";
import {Card,CardColumns}from 'react-bootstrap';
import {Row,Col}from 'react-bootstrap';
import programdata from "./program_data.js";
import Present from "./presentation.js";
import Semester from "./semester.js";
import ShowcaseCardDemo from "./cardtest";
import StepperDemo  from "./stepper";
import Programcard from "./programcard";
import StudentProgress from './studentprogress';
//this is the student landing page
class Course extends React.Component{
  constructor(props) {
    super(props);
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

      this.state = {
        items: null,
        loading: true,
        currentDate: new Date(date),
        // role:"ITmentor",
        // role:"ssmentor"
      }
    }
//as of now we are using the json file fro our local system. that is why this was commented
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
    //for displaying upcoming courses
    // const obj1=JSON.parse(programdata);
    // const obj2=JSON.parse(StudentProgress);
    // const Jsoncombine={...obj1,...obj2}
    const Jsoncombine={...programdata,...StudentProgress}
      const Upcomingpro=programdata.map(item =>{
        console.log(item.endDate)
        console.log(this.state.currentDate)
     
        if(new Date(item.startDate)>this.state.currentDate){
          return (
            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
              <Programcard key={item._id} name={item.courseName}  url={item.url} date={item.startDate} onClick={this.Click} />
            </Col>
          )
        } 
      }
      )
      //for displaying IT courses in the 1st semester
      // const semproIT=programdata.filter(sem=>sem.semester=="1").map(i =>Object.assign(i,StudentProgress.find(id=>id._id==i._id))).map(item=>{
        const semproIT=programdata.filter(sem=>sem.semester=="1").map(item =>{
        console.log(item.endDate)
      console.log(item.endDate)
      console.log(this.state.currentDate)
      var diff_time=new Date(item.endDate).getTime()-new Date(item.startDate).getTime()
    var weeks=Math.floor(diff_time/(1000 * 3600 * 24*7));
console.log(weeks)
      // console.log(this.state.currentDate.getMonth())
      if(new Date(item.startDate)<this.state.currentDate &&  item.courseType=="IT"){
        return(
                
                    <ShowcaseCardDemo weeks={weeks}key={item._id} name={item.courseName}  edate={item.endDate}date={item.startDate} image={item.image} url={item.url} onClick={this.Click} />
              
                )
     
      }
    } 
    )
    //for displaying ss courses in the first semester
    const semproSS=programdata.filter(sem=>sem.semester=="1").map(item =>{
      console.log(item.endDate)
      console.log(this.state.currentDate)

      if(new Date(item.startDate)<this.state.currentDate &&  item.courseType=="SS"){
        return(
                    <ShowcaseCardDemo key={item._id} name={item.courseName} edate={item.endDate} date={item.startDate} image={item.image} url={item.url} onClick={this.Click} />
                )
      }
    } 
    )
    //to display ongoing courses
   const Ongoingpro=programdata.map(item =>{
    
if(item._id=="0371438f82b01efb31e37cd1"){
  debugger;
}
    if(new Date(item.endDate)>this.state.currentDate && new Date(item.startDate)<this.state.currentDate && item.courseName!="Presentations"){
      return(
      <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
          <Programcard key={item._id} name={item.courseName}  url={item.url} onClick={this.Click} />
      </Col>
      )
    } 
  }
  )
  //to display the presentations card
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
    //to divide the sem section to IT and SS
  const element = (
    <React.Fragment>
     
        <br></br>
        <div class="float-child">
        <div>{semproIT}</div>
        </div>

        <div class="float-child-ss">
          <div>{semproSS}</div>
        </div>
    </React.Fragment>
  )
if(this.state.role=="ITmentor"){
  const itmentor=programdata.filter(sem=>sem.courseType=="IT").map(item =>{
    console.log(item.endDate)
    console.log(this.state.currentDate)


      return(
            
                  <ShowcaseCardDemo key={item._id} name={item.courseName}  date={item.startDate} image={item.image} url={item.url} onClick={this.Click} />
              
              )
  
  } 
  )
  return(
    <div>
       <Nav />
       <br></br>
       {itmentor}
    </div>
  )
}
else if(this.state.role=="ssmentor"){
  const ssmentor=programdata.filter(sem=>sem.courseType=="SS").map(item =>{
    console.log(item.endDate)
    console.log(this.state.currentDate)

      return(
             
                  <ShowcaseCardDemo key={item._id} name={item.courseName}  date={item.startDate} image={item.image} url={item.url} onClick={this.Click} />
           
              )

  } 
  )
  return(
    <div>
       <Nav />
       <br></br>
       {ssmentor}
    </div>
  )
}
else{
  //returns the components writen above in the webpage
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
        
     
  
      </div>
      <br></br>
      <div className="container-fluid">
        <h3 className="ongoing">Upcoming Courses&nbsp;&nbsp;</h3>
        <Row> {Upcomingpro} </Row>
      </div>
    </div>
    )
}


}
}

export default Course;


