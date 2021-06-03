import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar,NavDropdown}from 'react-bootstrap';
import{FaRegUserCircle}from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from '@material-ui/core/Link';
import First from "./first"
import './App.css';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
// import {DropdownButton, Dropdown} from 'react-bootstrap';
import { MenuItem } from '@material-ui/core';
import { Dropdown} from '@cimpress/react-components';

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
  fetch('https://raw.githubusercontent.com/iiit-msit/ProgramManagement/main/program.json?token=ARBLSQNYJKG7X52Z6ARHKA3AXESF4')
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
    <Programdropdown history={this.props.history} state={this.state}/>
    ) 
  }
}
class Programdropdown extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fruit: "Master of Science in Information Technology"
    };
    this.handleClick = this.handleClick.bind(this);
}
handleClick(e){
  console.log("Fruit Selected!!");
    this.setState({ fruit: e.target.value });
    console.log(e.target.value)
    // const value=this.props.state.names
    // for(let i=0;i<value.length;i++){
    if(e.target.value=="MSIT"){
    window.location="./first";
    }
    else if(e.target.value=="Master of Science in Information Technology"){
      window.location="/course";
    }
    else{
      window.location="/second";
    }
  // }
    // else{
        
    //     }
    {/* <Link to="/tomorrow"/>  */}
   
    // <Redirect to='/course' />
    // history.push("/first");
  // console.log(value.pro);
  // console.log(this.props.pro)
  //  value=this.props.state.names
  // console.log(value)
  // for(let i=0;i<value.length;i++){
  //   console.log(value[i].programName)
  //   if(value[i].programName==="MSIT"){
  //     console.log("yes");
  //     return <Redirect to ="/first" />
  //   }
   
  //   else if(value[i].programName=="Master of Science in Information Technology"){
  //     console.log("yes1")
  //     return <Redirect to ="/first" />
  //   }
    
  //   else{
  //     console.log("yes2")
  //     return <Redirect to ="/second" />
  //   }
  // }
}

render(){

let names = this.props.state.names;
  const pro=names.map((name) =>
          <button  key={name._id} value={name.programName} onSelect={this.handleClick}>{name.programName}</button >
          // <button>{pro}</button>
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

      {/* <DropdownButton id="dropdown-basic-button" title="Programs" onSelect={this.handleClick}  value={this.state.fruit}>
       
        {pro}
      </DropdownButton>&emsp; */}
      <Dropdown title="I'm a dropdown" onSelect={this.handleClick}>
        {pro}
        
      </Dropdown>
      
        {/* <select onChange={this.handleClick} value={this.state.fruit} defaultValue="blank">{pro}</select>&emsp;&emsp; */}
               
        <Button
              shape={'chubby'}
              variant={'contained'}
              color={'primary'}
              iconProps={{
                bgColor: 'white',
                shape: 'circular',
                color: 'primary',
              }}
            >            
            <MailIcon></MailIcon>&nbsp;
              Signed in with Gmail
          </Button>
      </Navbar.Collapse>&emsp;
      
      {/* <FaRegUserCircle size="2em"/> */}
      {/* <Avatar alt="Divya" src="https://cdn.pixabay.com/photo/2018/06/16/15/36/water-lily-3478924__340.jpg"/>&emsp;&emsp; */}
      <Link href="#"  color="inherit"><ExitToAppIcon style={{fontSize:40,color:"white"}}></ExitToAppIcon></Link>
    </Navbar>
  </div>
 )
}
}

export default Nav;


{/* <DropdownButton title='Dropdowna' onSelect={function(evt){console.log(evt)}}>
  <MenuItem eventKey='abc'>Dropdown link</MenuItem>
  <MenuItem eventKey={['a', 'b']}>Dropdown link</MenuItem>
</DropdownButton> */}
