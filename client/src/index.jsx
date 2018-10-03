import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    axios.get('/hey')
    .then(function(something) {
      console.log(something,'test');
    });
  }

  render() {
    return(<div>
      <h1>SANDBOX</h1>
      <p>test</p>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));