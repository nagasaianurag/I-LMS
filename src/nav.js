import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar,NavDropdown,Dropdown}from 'react-bootstrap';
import{FaRegUserCircle}from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from '@material-ui/core/Link';
import First from "./first"
import './App.css';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import Select from 'react-select';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
// const classes = useStyles();
function disable(){
  if(NavDropdown.Item.href=="/"){
    NavDropdown.disable=true
  }
}
class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: null,
      loading: true,
      names:[] 
    }
    
  }

componentDidMount() {
  let allnames = [];
  fetch('https://raw.githubusercontent.com/iiit-msit/ProgramManagement/main/program.json?token=ARBLSQNDM3XRERVRIPJ6Q53AYNCEI')
    .then(response =>{return response.json()} )
    .then(data =>{allnames = data.map((name) => {
      return name
      // console.log(name)
  }); 
      this.setState({ items:data,names:allnames})
      console.log(allnames[1])
});
}
render(){
  return(
    <DropdownP history={this.props.history} state={this.state}/>
    ) 
  }
}
class DropdownP extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fruit: "Master of Science in Information Technology"
    };
}
 handleClick=(e)=>{
  debugger;
  console.log("Fruit Selected!!");
    this.setState({ fruit: e.value });
    console.log(e.value)
 
    if(e.value=="MSIT"){
    window.location="./first";
    }
    else if(e.value=="Master of Science in Information Technology"){
      window.location="/course";
    }
    else{
      window.location="/second";
    }

}

render(){

let names = this.props.state.names;
  const pro=names.map((name) =>{
    return({value:name.programName,label:name.programName})
  }
          //  <option key={name._id} value={name.programName} onChange={this.handleClick}>{name.programName}</option>
          // <Dropdown.Item key={name._id} value={name.programName} >{name.programName}</Dropdown.Item>
 )

return(
   // Nav bar starts
  <div className="container-solid {classes.root}">
    <Navbar variant="dark" style={{backgroundColor:"darkslateblue"}}>
      <Navbar.Brand href="/"style={{fontSize:"1.5rem",fontWeight:"bold"}}>
        <img className="img" src='https://dashboard.msitprogram.net/msit_new_logo.png' ></img>
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse className="justify-content-end">
        
        <Select className="ddown" onChange={this.handleClick} value={this.state.fruit} options={pro} placeholder="Programs" >
        {/* <option value="" selected>select option</option> */}
          </Select>&emsp;&emsp;


          <Navbar.Text>Signed in as: <a href="#login">Username</a></Navbar.Text>
      </Navbar.Collapse>&emsp;

      {/* <FaRegUserCircle size="2em"/> */}
      <Avatar alt="Divya" src="https://cdn.pixabay.com/photo/2018/06/16/15/36/water-lily-3478924__340.jpg"/>&emsp;&emsp;

      <Link href="#"  color="inherit"><ExitToAppIcon style={{fontSize:40,color:"white"}}></ExitToAppIcon></Link>
    </Navbar>
  </div>
 )
}
}

export default Nav;


