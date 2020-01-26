import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            rmId: ""
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
            <div>
                <div className="form-container">
                    <h1>Just Chat</h1>
                    <form onSubmit={this.handleSubmit} className="form">
                        <label htmlFor="email">What is your email?</label>
                        <input type="email" name="username" onChange={this.handleChange} className="input" />
                        <label htmlFor="email">What is your room ID?</label>
                        <input type="text" name="rmId" onChange={this.handleChange} className="input" />
                        <button className="submit">Submit</button>
                    </form>
                </div>
                <div>
                    <p> ROOM 1: 0f82ea89-b85f-44cc-aac8-069e3c3c885f  </p>
                    <p> ROOM 2: 4ff19752-6fa4-4abe-a55c-a18c0f4cc5ca  </p>
                </div>
            </div>
        )
    }
}
export default Signup;