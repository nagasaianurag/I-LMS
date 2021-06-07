
import React,{ useState } from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useHistory } from "react-router-dom";
import Trycard from './cardtry';
import StudentProgress from './studentprogress';
const useStyles = makeStyles(() => ({
  card: {
    minWidth: 320,
    position: 'relative',
    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
    overflow: 'visible',
    borderRadius: '1.5rem',
    transition: '0.4s',
    '&:hover': {
      background: 'linear-gradient(to top, #014a7d, rgba(0,0,0,0))',
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
      borderRadius: '1.5rem',
      
    },
  },
  main: {
    overflow: 'hidden',
    borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    zIndex: 1,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      display: 'block',
      width: '100%',
      height: '100%',
   
      background:'repeating-linear-gradient(-45deg, rgb(255,255,255,0.3) 5px, rgba(0,0,0,0.5) 10px),linear-gradient(to top, #014a7d, rgba(0,0,0,0))'
      
    },
    '&:hover':{
      background: 'linear-gradient(to top, #014a7d, rgba(0,0,0,0))',
    },
  },
  main1: {
    overflow: 'hidden',
    borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    zIndex: 1,
    // background:'rgba(0,0,0,0.5)',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to top, #014a7d, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
    padding: '1.5rem 1.5rem 1rem',
  },
  avatar: {
    width: 48,
    height: 48,
  },
  tag: {
    display: 'inline-block',
    fontFamily: "'Sen', sans-serif",
    backgroundColor: '#D35400',
    borderRadius: '0.5rem',
    padding: '2px 0.5rem',
    color: '#fff',
    fontWeight:"bold",
    fontSize: '0.8rem',
    marginBottom: '0.5rem',
  },
  title: {
    fontFamily: "'Sen', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#fff',
  },
  author: {
    zIndex: 1,
    position: 'relative',
    borderBottomLeftRadius: '1.5rem',
    borderBottomRightRadius: '1.5rem',
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
}

));

export const ShowcaseCardDemo = React.memo(function News3Card(props) {

  const day=new Date();

 
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  let history = useHistory();
  function Click(){
    console.log("clicked")
    console.log(props.name)
  console.log(props)
  switch(props.name){
    case "IT Workshop":
      return history.push('/first')
   
    default:
      return history.push('/')
  }
 
  }
  console.log(props.date)
  console.log(day)
  var diff_time=new Date(props.edate).getTime()-new Date(props.date).getTime()
  var weeks=Math.floor(diff_time/(1000 * 3600 * 24*7));
  if( new Date(props.date)<day && new Date(props.edate)>day ){
    debugger;
    return (
      <div>
        <NoSsr>
          {/* <GoogleFontLoader fonts={[{ font: 'Sen', weights: [400, 800] }]} /> */}
        </NoSsr>
        
        <Card className={styles.card} onClick={Click}>
          <Box className={styles.main1} minHeight={230} position={'relative'}>
            <CardMedia 
              classes={mediaStyles}
              image={
                props.image
              }
            />
            <div className={styles.content}>
              <div className={styles.tag}>{props.date}</div>&nbsp;
              <div className={styles.tag}>{props.grade}</div>&nbsp;
              {/* <div className={styles.tag}>A+</div> */}
              <Typography className={styles.title}>
                {props.name}
              </Typography>

              {/* <Details></Details> */}
              {/* <Trycard></Trycard> */}
            </div>
          </Box>
        
          <div className={styles.shadow} />
          <div className={`${styles.shadow} ${styles.shadow2}`} />
        </Card>
        <br></br>
      </div>
    );
  }
  else{
    return (
      <div>
        <NoSsr>
          {/* <GoogleFontLoader fonts={[{ font: 'Sen', weights: [400, 800] }]} /> */}
        </NoSsr>
        
        <Card className={styles.card} onClick={Click}>
          <Box className={styles.main} minHeight={230} position={'relative'}>
            <CardMedia 
              classes={mediaStyles}
              image={
                props.image
              }
            />
            <div className={styles.content}>
              <div className={styles.tag}>{props.date}</div>&nbsp;
              <div className={styles.tag}>Incomplete</div>&nbsp;
              {/* <div className={styles.tag}>A+</div> */}
              <Typography className={styles.title}>
                {props.name}
              </Typography>
               {/* <Details></Details> */}
            </div>
          </Box>
        
          <div className={styles.shadow} />
          <div className={`${styles.shadow} ${styles.shadow2}`} />
        </Card>
        <br></br>
      </div>
    );
  }
 
});
export default ShowcaseCardDemo;