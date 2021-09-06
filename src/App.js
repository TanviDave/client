import './App.css';
import React from 'react';
import logo from './logo.svg';





class App extends React.Component {
  constructor(props) {
     super(props);
     
     this.state={FirstName : '',LastName : '',PhoneNumber :''}
     this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }
  
  // Return a controlled form i.e. values of the 
  // input field not stored in DOM values are exist 
  // in react component itself as state
  render(){
    return(
	    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
  
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First Name</label>
          <input 
            name='FirstName'
            placeholder='' 
            value = {this.state.FirstName}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            name='LastName' 
            placeholder=''
            value={this.state.LastName}
            onChange={this.handleChange}
          />
        </div>
        
        <div>
          <label>Phone Number</label>
          <input
            name='PhoneNumber' 
            placeholder=''
            value={this.state.PhoneNumber}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Create Account</button>
        </div>
      </form>
	    </div>
     )
  }
}

export default App;