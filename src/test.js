import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: null,
          loading: true
        }
    }
  
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/Jdivya20/React_js_week-1/master/Javacript/dynamic-quiz/questions.json')
          .then(response => response.json())
          .then(data => this.setState({ items:data,loading:false }));
      }
    render() {
      const { items } = this.state;
      if (this.state.loading) {
        return <div>Loading ... </div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </li>
            ))}
          </ul>
        );
      }
    }
  }
export default Details
// ReactDOM.render(<Details />,document.getElementById("root"))

import React, { Component } from 'react';

import { render } from 'react-dom';

   

class App extends Component {

  constructor() {

   

    var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

   

    this.state = {

      currentDate: date

    }

  }

   

  render() {

    return (

      <div>

        <p>

          { this.state.currentDate }

        </p>

      </div>

    );

  }

}

   

render(<App />, document.getElementById('root'));
