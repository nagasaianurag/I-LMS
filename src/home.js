import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col}from 'react-bootstrap';
import {Card,CardColumns}from 'react-bootstrap';
import HomeNav from "./homeNav";
import { Redirect } from 'react-router'
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";


class HomeComp extends React.Component {
  constructor(props) {
    var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      super(props);
      this.state = {
        items: null,
        loading: true,
        currentDate: date,
        visibility:false,

        role: "mentor"  
        // startDate:"2021-04-25T00:00",
        // endDate:"2021-05-14T20:39"
      }
      this.Click = this.Click.bind(this)
  }
Click(id){
    console.log("clicked on 1st",id)
}

componentDidMount() {
    // fetch('https://raw.githubusercontent.com/yelakantisunder/backend/main/program.json')
    fetch('https://raw.githubusercontent.com/iiit-msit/ProgramManagement/main/program.json?token=ARBLSQNYJKG7X52Z6ARHKA3AXESF4')
      .then(response => response.json())
      .then(data => this.setState({ items:data,loading:false }));
  }
  render() {
    const { items } = this.state;
    if (this.state.loading) {
      return <div><CircularProgress /></div>;
    } 
    // else if(this.state.currentDate>)
    else {
      const pro=items.map(item =>{
        // console.log(item.endDate)
        // console.log(this.state.currentDate)
        
        if(item.endDate > this.state.currentDate){
          
          return (
            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
              <Home id={item._id} name={item.programName} url={item.url}   />
            </Col>
          )
          console.log(item.url)
        }
        console.log(item.programName)
      }
     )
     console.log(items[0].programName)
     const pro1=items.map(item =>{
        if(item.endDate<this.state.currentDate){
        return (
          <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
            <Home key={item._id} name={item.programName}/>
          </Col>
        )
      }
      
    }
   )
   console.log(items)
  if(this.state.role=="mentor"){
      return(
            <div >
              <HomeNav/>
              <div className="container-fluid">
              <h3 className="ongoing">Ongoing Programs&nbsp;&nbsp;</h3>
              <br></br>
              <Row>
              {pro}
              </Row>
              <h3 className="ongoing">Completed Programs&nbsp;&nbsp;</h3>
              <br></br>
              <Row>
              {pro1}
              </Row>
              </div>
          </div>
          )  
  }
  else{
    return <Redirect to='/course' />
  }
    }
  }
}
function Home(props){
  console.log(props)
  let history = useHistory();
function handleClick(){
  console.log("clicked")
  console.log(props.name)
console.log(props)
switch(props.name){
  case "MSIT":
    return history.push('/first')
  case "Master of Science in Information Technology":
    return history.push('/course')
  case "Dummy_alpha":
      return history.push('/second')
  default:
    return history.push('/')
}
// this.props.history.push("/first");
// window.location="/second";
{/* <Link to='/'>Go to Aboutpage</Link> */}
}
  return(
    <div>
      <div className="container">
      <CardColumns>
        <Card className="procard" onClick={handleClick}>
          <Card.Body className="proname">{props.name}</Card.Body>
        </Card>
      </CardColumns>
      </div>
    </div>


  )
}

export default HomeComp;


