import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
// import'mdbreact/dist/css/mdb.css';
import './App.css';
import Home from "./home";
import Course from "./course";
import First from "./first";
import Second from "./second";
import Time from "./time";
import ShowcaseCardDemo from "./cardtest";
import StepperDemo from "./stepper";
function App(){

  return(
    <div >
      <Router>
       
  <Switch>
  <Route exact path='/'component={Home}/>
    <Route path="/course" component={Course}/>
    <Route path="/second" component={Second}/>
    <Route path="/first" component={First}/>
    <Route path="/time" component={Time}/>
    <Route path="/cardtest" component={ShowcaseCardDemo}/>
    <Route path="/stepper" component={StepperDemo}/>
    {/* <Route>
  {mentor ? <Redirect to="/" /> : <Course />}
</Route> */}
  </Switch>
</Router>
  </div>
  )
}

export default App;


