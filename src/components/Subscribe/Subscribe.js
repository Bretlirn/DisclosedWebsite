import React, { Component } from 'react'
import './Subscribe.css'

class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form className = 'subscribe-form' onSubmit={this.handleSubmit}>
            <label for="input-email">email:</label>
            <input className='form-input' id="input-email" type="text" value={this.state.value} onChange={this.handleChange} />
            <input className="form-button" type="submit" value="Submit" />
          </form>
        );
      }
}

export default Subscribe