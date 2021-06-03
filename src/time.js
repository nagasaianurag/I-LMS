// import React from "react";
// // import {
// //     Timeline,
// //     Container,
// //     YearContent,
// //     BodyContent,
// //     Section,
// //     Description,
// //    } from 'vertical-timeline-component-react';
   
// //    const Time = () => {
// //     const customTheme = {
// //      yearColor: '#405b73',
// //      lineColor: 'orange',
// //      dotColor: 'blue',
// //      borderDotColor: '#d0cdc4',
// //      titleColor: '#405b73',
// //      subtitleColor: '#bf9765',
// //      textColor: '#262626',
// //     };
   
// //     return (
// //      <Timeline theme={customTheme} dateFormat='ll' >
// //       <Container>
// //        {/* <YearContent startDate='2020/07/01' currentYear /> */}
// //        <YearContent startDate='2020/07/01'  />
// //        <BodyContent>
           
// //         <Section title='Start'>
// //         <YearContent startDate='2020/07/01'  />
// //          {/* <Description variant='subtitle' text={<YearContent startDate='2020/07/01' />} /> */}
// //         </Section>
        
// //         <Section title='Week1'>
// //         {/* <YearContent startDate='2020/07/08'  /> */}
// //         </Section>

// //         <Section title='Week2'>
// //         {/* <YearContent startDate='2020/07/16'  /> */}
// //         </Section>

// //         <Section title='Week3'>
// //         {/* <YearContent startDate='2020/07/24'  /> */}
// //         </Section>

// //         <Section title='Week4'>
// //         {/* <YearContent startDate='2020/07/31'  /> */}
// //         </Section>

// //         <Section title='Week5'>
// //         </Section>

// //         <Section title='Week6'>
// //         </Section>

// //         <Section title='Week7'>
// //         </Section>

// //         <Section title='Week8'>
// //         </Section>

// //        </BodyContent>
// //       </Container>
// //      </Timeline>
// //     );
// //    };
   
// // export default Time;

// import Timeline from '@material-ui/lab/Timeline';
// import TimelineItem from '@material-ui/lab/TimelineItem';
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// import TimelineConnector from '@material-ui/lab/TimelineConnector';
// import TimelineContent from '@material-ui/lab/TimelineContent';
// import TimelineDot from '@material-ui/lab/TimelineDot';
// import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
// import Typography from '@material-ui/core/Typography';
// // import "./App.css";

// export default function Time() {
//   return (
//     <React.Fragment>
//       <Timeline >
//         <TimelineItem>
//           <TimelineOppositeContent>
//             <Typography variant="caption" display="block" gutterBottom>Jul 1,2021</Typography>
//           </TimelineOppositeContent>
//           <TimelineSeparator><TimelineDot/><TimelineConnector/></TimelineSeparator>
//           <TimelineContent>
//             <Typography variant="caption" display="block" gutterBottom>Start</Typography>
//           </TimelineContent>
//         </TimelineItem>

//         <TimelineItem>
//           <TimelineOppositeContent>
//             <Typography variant="caption" display="block" gutterBottom>Jul 1,2021</Typography>
//           </TimelineOppositeContent>
//           <TimelineSeparator><TimelineDot/><TimelineConnector/></TimelineSeparator>
//           <TimelineContent>
//             <Typography variant="caption" display="block" gutterBottom>Week1</Typography>
//           </TimelineContent>
//         </TimelineItem>

//         <TimelineItem>
//           <TimelineOppositeContent>
//             <Typography variant="caption" display="block" gutterBottom>Jul 1,2021</Typography>
//           </TimelineOppositeContent>
//           <TimelineSeparator><TimelineDot/><TimelineConnector/></TimelineSeparator>
//           <TimelineContent>
//             <Typography variant="caption" display="block" gutterBottom>Week2</Typography>
//           </TimelineContent>
//         </TimelineItem>

//         <TimelineItem>
//           <TimelineOppositeContent>
//             <Typography variant="caption" display="block" gutterBottom>Jul 1,2021</Typography>
//           </TimelineOppositeContent>
//           <TimelineSeparator><TimelineDot/><TimelineConnector/></TimelineSeparator>
//           <TimelineContent>
//             <Typography variant="caption" display="block" gutterBottom>Week3</Typography>
//           </TimelineContent>
//         </TimelineItem>

//         <TimelineItem>
//           <TimelineOppositeContent>
//             <Typography variant="caption" display="block" gutterBottom>Jul 1,2021</Typography>
//           </TimelineOppositeContent>
//           <TimelineSeparator><TimelineDot/><TimelineConnector/></TimelineSeparator>
//           <TimelineContent>
//             <Typography variant="caption" display="block" gutterBottom>Week4</Typography>
//           </TimelineContent>
//         </TimelineItem>

//         <TimelineItem>
//           <TimelineOppositeContent>
//             <Typography variant="caption" display="block" gutterBottom>Jul 1,2021</Typography>
//           </TimelineOppositeContent>
//           <TimelineSeparator><TimelineDot/><TimelineConnector/></TimelineSeparator>
//           <TimelineContent>
//             <Typography variant="caption" display="block" gutterBottom>Week5</Typography>
//           </TimelineContent>
//         </TimelineItem>

//         <TimelineItem>
//           <TimelineOppositeContent>
//             <Typography variant="caption" display="block" gutterBottom>Jul 1,2021</Typography>
//           </TimelineOppositeContent>
//           <TimelineSeparator><TimelineDot/><TimelineConnector/></TimelineSeparator>
//           <TimelineContent>
//             <Typography variant="caption" display="block" gutterBottom>Week6</Typography>
//           </TimelineContent>
//         </TimelineItem>

//         <TimelineItem>
//           <TimelineOppositeContent>
//             <Typography variant="caption" display="block" gutterBottom>Jul 1,2021</Typography>
//           </TimelineOppositeContent>
//           <TimelineSeparator><TimelineDot/><TimelineConnector/></TimelineSeparator>
//           <TimelineContent>
//             <Typography variant="caption" display="block" gutterBottom>Week7</Typography>
//           </TimelineContent>
//         </TimelineItem>
        
//         <TimelineItem>
//           <TimelineOppositeContent>
//             <Typography variant="caption" display="block" gutterBottom>Jul 1,2021</Typography>
//           </TimelineOppositeContent>
//           <TimelineSeparator><TimelineDot/></TimelineSeparator>
//           <TimelineContent>
//             <Typography variant="caption" display="block" gutterBottom>Week8</Typography>
//           </TimelineContent>
//         </TimelineItem>
//       </Timeline>
//     </React.Fragment>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Timeline } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Week1', 'Week2', 'Week3','Week4', 'Week5', 'Week6','Week7', 'Week8','Week9', 'Week10'];
}

function getStepContent(step) {
  // switch (step) {
  //   case 0:
  //     return `For each ad campaign that you create, you can control how much
  //             you're willing to spend on clicks and conversions, which networks
  //             and geographical locations you want your ads to show on, and more.`;
  //   case 1:
  //     return 'An ad group contains one or more ads which target a shared set of keywords.';
  //   case 2:
  //     return `Try out different ad text to see what brings in the most customers,
  //             and learn how to enhance your ads using features like ad extensions.
  //             If you run into any problems with your ads, find out how to tell if
  //             they're running and how to resolve approval issues.`;
  //   default:
  //     return 'Unknown step';
  // }
}

export default function Time() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {/* <Typography>{getStepContent(index)}</Typography> */}
              {/* <Timel /> */}
              {/* <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Done' : 'Next'}
                  </Button>
                </div>
              </div> */}
            </StepContent>
          </Step>
        ))}
        <Timel />
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )} */}
    </div>
  );
}
class Timel extends React.Component{
  constructor(props){
    super(props);
    this.state={
      // startDate:"2020-9-07",
      // endDate:"2021-7-30",
      startdate:new Date("2020-9-07"),
      enddate:new Date("2021-7-30"),
// date.setDate(date.getDate() + 7);

// console.log(date);
    }
    
  }
  render(){
    const sd=this.state.startdate.getDate()
    const ed=this.state.enddate.getDate()
    console.log(sd,ed)
    // for(let i=sd;i<ed;i+7){
    //   console.log(i)
    // }
    
    // console.log(weeks)
    return(
      null
    )
  }
}
