import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import Input from './Input';
import MessageList from './MessageList';

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentUser: null,
            currentRoom: { users: [] },
            messages: [],
            users: [],
        }
        this.addMessage = this.addMessage.bind(this);
    }
    
    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: "v1:us1:906ae81f-e261-4e28-a44e-500e240028b7",
            userId: this.props.currentId,
            tokenProvider: new TokenProvider({
                url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/906ae81f-e261-4e28-a44e-500e240028b7/token"
            })
        })

        chatManager
            .connect()
            .then(currentUser => {
                this.setState({ currentUser: currentUser })
                return currentUser.subscribeToRoom({
                    roomId: this.props.rmId,
                    messageLimit: 5,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message],
                            })
                        },
                    }
                })
            })
            .then(currentRoom => {
                this.setState({
                    currentRoom,
                    users: currentRoom.userIds
                })
            })
            .catch(error => console.log(error))
        }


    addMessage(text) {
        console.log(this.state);
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id
        })
            .catch(error => console.error('error', error));
    }

    render() {
        return (
            <div>
                <h2 className="header">Just Chat</h2>
                <MessageList roomId={this.props.rmId} messages={this.state.messages} />
                <Input className="input-field" onSubmit={this.addMessage} />
            </div>
        )
    }
}

export default ChatApp;
