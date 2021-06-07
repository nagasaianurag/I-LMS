import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar,NavDropdown}from 'react-bootstrap';
import{FaRegUserCircle}from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ReactDOM from "react-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from '@material-ui/core/Link';
import './App.css';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
function disable(){
  if(NavDropdown.Item.href=="/"){
    NavDropdown.disable=true
  }
}
function HomeNav(props){
  const classes = useStyles();
  return(
    // Nav bar starts
    <div className="container-solid {classes.root}">
      <Navbar variant="dark" style={{backgroundColor:"darkslateblue"}}>
        <Navbar.Brand href="/"style={{fontSize:"1.5rem",fontWeight:"bold"}}>
          <img className="img" src='https://dashboard.msitprogram.net/msit_new_logo.png' ></img>
        </Navbar.Brand>
        <Navbar.Toggle />
      
        <Navbar.Collapse className="justify-content-end">
          {/* <Navbar.Text>Signed in as: <a href="course">Username</a></Navbar.Text> */}
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
              Sign in with Gmail
          </Button>
        </Navbar.Collapse>&emsp;
        {/* <FaRegUserCircle size="2em"/> */}
        {/* <Avatar alt="Divya" src="https://cdn.pixabay.com/photo/2018/06/16/15/36/water-lily-3478924__340.jpg"/>&emsp;&emsp; */}


        <Link href="#"  color="inherit">
        <ExitToAppIcon style={{fontSize:40,color:"white"}}></ExitToAppIcon>
          </Link>
      </Navbar>
    </div>
  )
}

export default HomeNav;


