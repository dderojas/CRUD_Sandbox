import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import NamesList from './components/NamesList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      updatedNames: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  componentDidMount() {
    axios.get('/getTest')
    .then((response) => {
      console.log(response,'response data');
      this.setState({
        updatedNames: response.data
      });
    })
    .catch(function(err) {
      console.log(err, 'failed to get');
    });
    // how to save data after server/client shuts off
  }

  handleChange(e) {
    e.preventDefault();
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
      <br></br>
      <div>{this.state.updatedNames.map((names) => {
        return <NamesList lastName={names.lastName} firstName={names.firstName}/>
      })}</div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));