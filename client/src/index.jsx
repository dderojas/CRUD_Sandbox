import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  componentDidMount() {
    axios.get('/getTest')
    .then(function(response) {
      console.log(response,'test');
    })
    .catch(function(err) {
      console.log(err, 'failed to get');
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      inputField: e.target.value
    });
  }

  buttonClick(e) {
    axios.post('/postTest', this.state.inputField)
    .then(function(response) {
      console.log(response,'test');
    })
    .catch(function(err) {
      console.log(err,'failed to post');
    });

    this.setState({
      inputField:''
    });
  }

  render() {
    return(<div>
      <h1>SANDBOX</h1>
      <p>test</p>
      <input type="text" value={this.state.inputField} onChange={this.handleChange}></input>
      <button onClick={this.buttonClick}>testButton</button>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));