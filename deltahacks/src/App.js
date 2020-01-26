
import React, { Component } from 'react';
import Signup from './Components/Signup';
import ChatApp from './Components/ChatApp';
import Background from './Background.js';


import { default as Chatkit } from '@pusher/chatkit-server';


const chatkit = new Chatkit({
  instanceLocator: "v1:us1:906ae81f-e261-4e28-a44e-500e240028b7",
  key: "de0b32fb-8194-42b1-a1d1-c0c176391a88:YZQhoBsydYy9jH/ncFrsLg92t/lR5gO7yfwBRNjshVc="
})


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: '',
      currentId: '',
      currentView: 'signup'
    }
    this.changeView = this.changeView.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  createUser(username) {
    chatkit.createUser({
      id: username,
      name: username,
    })
      .then((currentUser) => {
        this.setState({
          currentUsername: username,
          currentId: username,
          currentView: 'chatApp'
        })
      }).catch((err) => {
        if (err.status === 400) {
          this.setState( {
            currentUsername: username,
            currentId: username,
            currentView: 'chatApp'
          })
        } else {
          console.log(err.status);
        }
      });
  }

  changeView(view) {
    this.setState({
      currentView: view
    })
  }

  render() {
    let view = '';

   
    if (this.state.currentView === "signup") {
      view = <Signup onSubmit={this.createUser} />
    } else if (this.state.currentView === "chatApp") {
      view = <ChatApp currentId={this.state.currentId} />
    }
    return (
      <div>
        <Background  />
        <div className="App">
            {view}
        </div>
      </div>
    );
  }
}
export default App;
