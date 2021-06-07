import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col}from 'react-bootstrap';
import {Card,CardColumns}from 'react-bootstrap';
import HomeNav from "./homeNav";
import { Redirect } from 'react-router'
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";
import ShowcaseCardDemo from "./cardtest";
import Programcard from "./programcard";
import Box from '@material-ui/core/Box';
// import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
//this is the mentor landing page
const useStyles = makeStyles(() => ({
  card: {
    minWidth: 320,
    position: 'relative',
    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
    overflow: 'visible',
    borderRadius: '0.3rem',
    transition: '0.4s',
    backgroundColor: 'darkslateblue',
    '&:hover': {
      transform: 'translateY(-2px)',
      '& $shadow': {
        bottom: '-1.5rem',
      },
      '& $shadow2': {
        bottom: '-2.5rem',
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 0,
      display: 'block',
      width: '100%',
      bottom: -1,
      height: '100%',
      borderRadius: '0.3rem',
      backgroundColor: 'darkslateblue',
    },
  },
  main: {
    overflow: 'hidden',
    borderTopLeftRadius: '0.3rem',
    borderTopRightRadius: '0.3rem',
    borderBottomLeftRadius: '0.3rem',
    borderBottomRightRadius: '0.3rem',
    zIndex: 1,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      display: 'block',
      width: '100%',
      height: '100%',

    },
  },
  content: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
    padding: '1.5rem 1.5rem 1rem',
  },

  title: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '1rem',
    fontWeight: 700,
    color: '#fff',
    textAlign:"center",
    paddingBottom:"5px"
  },

  shadow: {
    transition: '0.2s',
    position: 'absolute',
    zIndex: 0,
    width: '88%',
    height: '100%',
    bottom: 0,
    borderRadius: '1.5rem',
    backgroundColor: 'rgba(0,0,0,0.06)',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  shadow2: {
    bottom: 0,
    width: '72%',
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
}));

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
   
      }
      this.Click = this.Click.bind(this)
  }
Click(id){
    console.log("clicked on 1st",id)
}
//to fetch data from the json file
componentDidMount() {
    // fetch('https://raw.githubusercontent.com/yelakantisunder/backend/main/program.json')
    fetch('https://raw.githubusercontent.com/iiit-msit/ProgramManagement/main/program.json?token=ARBLSQNDM3XRERVRIPJ6Q53AYNCEI')
      .then(response => response.json())
      .then(data => this.setState({ items:data,loading:false }));
  }
  render() {
    const { items } = this.state;
    if (this.state.loading) {
      return <div><CircularProgress /></div>;
    } 
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
   //to display mentor homepage if the role is mentor
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
  //if not mentor it redirects to course page
  else{
    return <Redirect to='/course' />
  }
    }
  }
}
function Home(props){
  console.log(props)
  let history = useHistory();
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
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
//this is for the redirection to various courses on clicking various cards
}
  return(
    <div>
      <div className="container">
      <Card className={styles.card} onClick={handleClick}>
        <Box className={styles.main} minHeight={65} position={'relative'}>
          <CardMedia 
            classes={mediaStyles}
            image={
              props.image
            }
          />
          <div className={styles.content}>

            <Typography className={styles.title}>
              {props.name}
            </Typography>
          </div>
        </Box>

      </Card>
      </div>
    </div>
//this is the card structure for the mentor page

  )
}

export default HomeComp;


