import React, {Component} from "react";
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";

class App extends Component {

    constructor (props) {
        super(props)
        this.state = {
            currentUser: { name: "Bob" },
            messages: [
                {
                    username: "Bob",
                    content: "Has anyone seen my marbles?"
                },
                {
                    username: "Anonymous",
                    content: "No, I think you lost them. You lost your marbles, Bob. You lost them for good."
                }
            ]
        }
    }

    render() {
        return (
            <div className="wrapper">
                <nav>
                    <h1>Chatter</h1>
                </nav>
                <MessageList messages={this.state.messages} />
                <ChatBar />
            </div>
        );
    }
}

export default App;