import React, { Component } from 'react';
import { Step, StepGroup, Stepper } from '@cimpress/react-components';
import programdata from "./program_data.js";
export default class StepperDemo extends Component {
  state = {
    activeStep: '1',
    verticalActiveStep: '1',
    sem1startdate:new Date("2020-9-07"),
          sem1enddate:new Date("2020-11-07"),
          sem2startdate:new Date("2020-11-09"),
          sem2enddate:new Date("2021-2-06"),
          sem3startdate:new Date("2021-2-08"),
          sem3enddate:new Date("2021-4-10"),
          curdate:new Date()
  };

  setStep = index => {
    this.setState({ activeStep: index });
  };

  setVerticalStep = index => {
    this.setState({ verticalActiveStep: index });
  };

  render() {
    const checkmarkIcon = '✓';
            var diff_time=this.state.sem3enddate.getTime()-this.state.sem1startdate.getTime()
        var days1=Math.floor(diff_time/(1000 * 3600 * 24*7));

        // var weeks=Math.floor(days/7)
        // console.log(days)
       const l=[]

   
       //console.log(this.state.weeks)
        for(let i=0;i<days1;i++){
l.push(i)

// console.log(l)
        }
  // for(let i=0;i<days2;i++){
  //   m.push(i)
    
  //   // console.log(l)
  //           }
  // for(let i=0;i<days3;i++){
  //   n.push(i)
    
  //   // console.log(l)
  //                 }

    return (
      <div>
        {/* <Stepper activeStep={this.state.activeStep}>
          <Step onClick={this.setStep}>
            <div>Step One</div>
            <small>A step</small>
          </Step>
          <Step onClick={this.setStep}>
            <div>Step Two</div>
            <small>It's another step!</small>
          </Step>
          <Step onClick={this.setStep} tip="Lorem ipsum tipsum">
            <div>Step Three</div>
            <small>A third step</small>
          </Step>
        </Stepper> */}
        {/* <h5>Another stepper...</h5>
        <div style={{ width: '200px' }}>
          <Stepper small activeStep="3" status="warning">
            <Step name="order accepted" tip="Order accepted by the platform" />
            <Step name="doc review" tip="Document successfully rendered" />
            <Step name="inventory" tip="Inventory check passed" />
            <Step name="processing" tip="Order processed" />
            <Step name="production" tip="In production" tipDirection="bottom" />
            <Step name="shipped" tip="Shipped" />
          </Stepper>
        </div> */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '10px' }}>
          <div>
            {/* <h5>Vertical Stepper with SubSteps</h5>
            <p>Nested steps with a StepGroup are only supported for full-sized vertical steppers.</p>
            <div style={{ height: '330px' }}>
              <Stepper activeStep={this.state.verticalActiveStep} vertical>
                <Step onClick={this.setVerticalStep}>
                  <div>Step One</div>
                  <small>A step</small>
                </Step>
                <Step overrideStatus="warning" onClick={this.setVerticalStep}>
                  <div>Step Two</div>
                </Step>
                <StepGroup onClick={this.setVerticalStep} tip="Lorem ipsum tipsum" contents={<div>Step Three</div>}>
                  <Step overrideStatus="danger" tip="This step causes Step Three to inherit the danger color" onClick={this.setVerticalStep}>
                    <div>Sub-step one</div>
                  </Step>
                  <Step overrideStatus="warning" onClick={this.setVerticalStep}>
                    <div>Sub-step two</div>
                  </Step>
                  <Step onClick={this.setVerticalStep}>
                    <div>Sub-step three</div>
                  </Step>
                </StepGroup>
                <Step onClick={this.setVerticalStep} icon={checkmarkIcon}>
                  <div>Step With Custom Icon</div>
                </Step>
              </Stepper>
            </div> */}
          </div>
          {/* <div style={{ height: '550px' }}> */}
             {/* <h5>Small Vertical Stepper</h5> */}
            <div style={{ height: '2000px' }}>

              <Stepper small vertical activeStep="28" partial status="warning">
                {/* <Step name="order accepted"  > Week 1</Step> */}
                {l.map(w=>(
                <Step>week{w+1}</Step>
                ))}
                
              </Stepper>
            </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
// import * as React from 'react';
// import Timeline from '@material-ui/lab/Timeline';
// import TimelineItem from '@material-ui/lab/TimelineItem';
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// import TimelineConnector from '@material-ui/lab/TimelineConnector';
// import TimelineContent from '@material-ui/lab/TimelineContent';
// import TimelineDot from '@material-ui/lab/TimelineDot';
// import {Card,CardColumns}from 'react-bootstrap';

// class StepperDemo extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//       sem1startdate:new Date("2020-9-07"),
//       sem1enddate:new Date("2020-11-07"),
//       sem2startdate:new Date("2020-11-09"),
//       sem2enddate:new Date("2021-2-06"),
//       sem3startdate:new Date("2021-2-08"),
//       sem3enddate:new Date("2021-4-10"),
//       curdate:new Date()
//         }
//         // this.Click = this.Click.bind(this);
//     }
//     // Click(e){
        
//     //     console.log(this.state.enddate.getTime())
//     //     var diff_time=this.state.enddate.getTime()-this.state.startdate.getTime()
       
//     //     var days=diff_time/(1000 * 3600 * 24);
//     //     var weeks=Math.ceil(days/7)
//     //     console.log(weeks)
//     // }
//     render(){
//         // console.log(this.state.enddate.getTime())
//         var diff_time=this.state.sem1enddate.getTime()-this.state.sem1startdate.getTime()
//        var sem2_time=this.state.sem2enddate.getTime()-this.state.sem2startdate.getTime()
//        var sem3_time=this.state.sem3enddate.getTime()-this.state.sem3startdate.getTime()
//         var days1=Math.floor(diff_time/(1000 * 3600 * 24*7));
//         var days2=Math.floor(sem2_time/(1000 * 3600 * 24*7));
//         var days3=Math.floor(sem3_time/(1000 * 3600 * 24*7));
//         // var weeks=Math.floor(days/7)
//         // console.log(days)
//        const l=[]
//        const m=[]
//        const n=[]
   
//        //console.log(this.state.weeks)
//         for(let i=0;i<days1;i++){
// l.push(i)

// // console.log(l)
//         }
//   for(let i=0;i<days2;i++){
//     m.push(i)
    
//     // console.log(l)
//             }
//   for(let i=0;i<days3;i++){
//     n.push(i)
    
//     // console.log(l)
//                   }
        
//         return(
//           <div>
//              <Card className="semcard"  >
//         <Card.Body className="semname">Start</Card.Body>
//       </Card>
//                <Timeline align="right">
//                {/* <TimelineItem>
//                   <TimelineSeparator>
//                     <TimelineDot color="primary" className="dot">str</TimelineDot>
//                     <TimelineConnector />
//                   </TimelineSeparator>
//                   {/* <TimelineContent style={{fontSize:"10px"}}>W{w+1}</TimelineContent> */}
//                 {/* </TimelineItem>  */}
                 
//             {l.map(w=>(
             
//                 <TimelineItem>
//                   {/* <TimelineSeparator> */}
//                     <TimelineDot color="primary" className="dot" />
//                     <TimelineConnector  />
//                   {/* </TimelineSeparator> */}
//                   <TimelineContent style={{fontSize:"10px"}}>W{w+1}</TimelineContent>
//                 </TimelineItem>
            
//             ))}
//             {/* <TimelineDot color="primary" className="dot"></TimelineDot> */}
//             </Timeline>
//             <Timeline align="right">
//             {m.map(w=>(
             
//                 <TimelineItem>
//                   <TimelineSeparator>
//                     <TimelineDot color="primary" />
//                     <TimelineConnector />
//                   </TimelineSeparator>
//                   <TimelineContent style={{fontSize:"10px"}}>W{w+1}</TimelineContent>
//                 </TimelineItem>
            
//             ))}
//             </Timeline>
//             <Timeline align="right">
//             {n.map(w=>(
             
//                 <TimelineItem >
//                   <TimelineSeparator  >
//                     <TimelineDot color="primary"/>
//                     <TimelineConnector style={{maxHeight:"10px"}} />
//                   </TimelineSeparator>
//                   <TimelineContent style={{fontSize:"10px"}}>W{w+1}</TimelineContent>
//                 </TimelineItem>
            
//             ))}
//             </Timeline>
//           </div>
//         )
// //         return(
// //           {s}
// //         )
//         // const wdata=l.map(item =>{
//         //     // console.log(item.endDate)
//         //     // console.log(this.state.currentDate)
        
//         //     if(item.endDate>this.state.currentDate && item.startDate<this.state.currentDate && item.courseName!="Presentations"){
//         //       return(
//         //       <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
//         //           <CourseName key={item._id} name={item.courseName}  url={item.url} onClick={this.Click} />
//         //       </Col>
//         //       )
//         //     } 
//         //   }
//         //   )
        
//     }
  
// }
// // function Steptime(props){
// //   return (
// //     <Timeline position="left">
// //       <TimelineItem>
// //         <TimelineSeparator>
// //           <TimelineDot color="primary" />
// //           <TimelineConnector />
// //         </TimelineSeparator>
// //         <TimelineContent>Week{props.i+1}</TimelineContent>
// //       </TimelineItem>
// //       {/* <TimelineItem>
// //         <TimelineSeparator>
// //           <TimelineDot color="primary"  />
// //           <TimelineConnector />
// //         </TimelineSeparator>
// //         <TimelineContent>Week-2</TimelineContent>
// //       </TimelineItem>
// //       <TimelineItem>
// //         <TimelineSeparator>
// //           <TimelineDot color="primary"  />
// //           <TimelineConnector />
// //         </TimelineSeparator>
// //         <TimelineContent>Week-3</TimelineContent>
// //       </TimelineItem>*/}
// //       {/* <TimelineItem>
// //         <TimelineSeparator>
// //           <TimelineDot  color="primary" />
// //         </TimelineSeparator>
// //         <TimelineContent>Week-4</TimelineContent>
// //       </TimelineItem>  */}
// //     </Timeline>
// //   );
// // }
//  export default StepperDemo;