import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

import ShowcaseCardDemo from "./cardtest";
class Semester extends React.Component{
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
      const semproIT=programdata.filter(sem=>sem.semester=="3").map(item =>{
      console.log(item.endDate)
      console.log(this.state.currentDate)
      // console.log(this.state.currentDate.getMonth())
      if(item.startDate<this.state.currentDate &&  item.courseType=="IT"){
     return(
<ShowcaseCardDemo key={item._id} name={item.courseName} edate={item.endDate} date={item.startDate} image={item.image} url={item.url} onClick={this.Click} />
     )
                
                    
                
                
      }
    } 
    )
    const semproSS=programdata.filter(sem=>sem.semester=="3").map(item =>{
      console.log(item.endDate)
      console.log(this.state.currentDate)

      if( item.startDate<this.state.currentDate &&  item.courseType=="SS"){
  return(
<ShowcaseCardDemo key={item._id} name={item.courseName} edate={item.endDate} date={item.startDate} image={item.image} url={item.url} onClick={this.Click} />
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
<Row>{element}</Row>
    </div>
    
  )
}
}

export default Semester;