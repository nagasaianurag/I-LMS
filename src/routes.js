import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './home';


function Routes(){
    return(
        <Router>
            <Route path="/" exact strict render={
                ()=>{
                    <Home />
                }
            }>

            </Route>
            <Route path="/course" exact strict render={
                ()=>{
                    <h1>hi</h1>
                }
            }>
            <Route path="/first" exact strict render={
                ()=>{
                    <h1>hi</h1>
                }
            }></Route>

            </Route>
        </Router>
    )
}
 export default Routes;