import React, { Component } from 'react';
import { Step, StepGroup, Stepper } from '@cimpress/react-components';
import programdata from "./program_data.js";
export default class StepperDemo extends Component {
  constructor(props){
    super(props);

    var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
 this.state = {
    activeStep: '1',
    verticalActiveStep: '1',
    sem1startdate:new Date("2020-9-07"),
          sem1enddate:new Date("2020-11-07"),
          sem2startdate:new Date("2020-11-09"),
          sem2enddate:new Date("2021-2-06"),
          sem3startdate:new Date("2021-2-08"),
          sem3enddate:new Date("2021-4-10"),
          curdate:date
  };
}

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
      var weektime=new Date("2021-3-10").getTime()-this.state.sem1startdate.getTime()
      var currweek=Math.floor(weektime/(1000 * 3600 * 24*7));
console.log(currweek)
        // var weeks=Math.floor(days/7)
        // console.log(days)
       const l=[]

   
       //console.log(this.state.weeks)
        for(let i=0;i<days1;i++){
l.push(i)
               }

    return (
      <div>
       
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '10px' }}>
          <div>
         
          </div>
  
            <div style={{ height: '2000px' }}>

              <Stepper small vertical activeStep={currweek} partial status="warning">

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
