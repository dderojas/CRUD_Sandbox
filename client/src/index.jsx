import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:''
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
    // get updated first and last names
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value,'what is target');
    var {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  buttonClick(e) {
    e.preventDefault();
    var input = Object.assign({}, this.state);

    axios.post('/postTest', input)
    .then(function(response) {
      console.log(response,'test');
    })
    .catch(function(err) {
      console.log(err,'failed to post');
    });

    this.setState({
      firstName:'',
      lastName:''
    });
  }

  render() {
    return(<div>
      <h1>SANDBOX</h1>
      <p>First Name</p>
      <input name='firstName' type="text" value={this.state.firstName} onChange={this.handleChange}></input>
      <p>Last Name</p>
      <input name='lastName' type="text" value={this.state.lastName} onChange={this.handleChange}></input>
      <br></br>
      <button onClick={this.buttonClick}>testButton</button>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));