import React from "react";
import Nav from "./nav.js";
import { Redirect } from "react-router";
// const options = [
//     {
//       label: "Apple",
//       value: "apple",
//     },
//     {
//       label: "Mango",
//       value: "mango",
//     },
//     {
//       label: "Banana",
//       value: "banana",
//     },
//     {
//       label: "Pineapple",
//       value: "pineapple",
//     },
//   ];
// class First extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//           fruit: "banana",
//         };
    
//         this.handleChange = this.handleChange.bind(this);
//       }
    
//       handleChange(e) {
//         console.log("Fruit Selected!!");
//         this.setState({ fruit: e.target.value });
//         console.log(e.target.value)
//         if(e.target.value==="apple")
//             // <Redirect to="/course" />
//             this.props.history.push("/course");
//         // }
//       }
    
//       render() {
//         return (
//           <div id="App">
//             <div className="select-container">
//               <select value={this.state.fruit} onChange={this.handleChange}>
//                 {options.map((option) => (
//                   <option value={option.value}>{option.label}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         );
//       }
//     }
    function First(){
        return(
        <div>
        {/* <Nav /> */}
        <h1>hi u have successfully redirected to MSIT page</h1>  
        </div>
        )
        
    }
  


export default First;
