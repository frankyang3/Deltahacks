import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            rmId: "0f82ea89-b85f-44cc-aac8-069e3c3c885f"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleSubmitRm = this.handleSubmitRm.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        //console.log(this.state.rmId)
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username, this.state.rmId);
        //this.props.onSubmitRm(this.state.rmId);
    }
    render() {
        return (
            
                <div className="form-container">
                    <h1>Just Chat</h1>
                    <form onSubmit={this.handleSubmit} className="form">
                        <label htmlFor="email">What is your email?</label>
                        <input type="email" name="username" onChange={this.handleChange} className="input" />
                        <input type="radio" name="rmId" onChange={this.handleChange} value = "0f82ea89-b85f-44cc-aac8-069e3c3c885f" /> <h9>Room 1</h9>
                        <input type="radio" name="rmId" onChange={this.handleChange} value = "4ff19752-6fa4-4abe-a55c-a18c0f4cc5ca" /> <h9>Room 2</h9> <br/>
                        <input type="radio" name="rmId" onChange={this.handleChange} value = "9b93b260-861b-4f86-b2e0-fe4abc70e2bc" /> <h9>Room 3</h9> 
                        <input type="radio" name="rmId" onChange={this.handleChange} value = "f228987c-dcdc-4e62-8de1-064c074a5cd8" /> <h9>Room 4</h9> <br/>    
                        <button className="submit">Submit</button>
                    </form>
                </div>
                
           
        )
    }
}
export default Signup;