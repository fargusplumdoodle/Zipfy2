const React = require('react');
const MsgList = require('./MsgList.jsx');
const NewMsg = require('./NewMsg.jsx');

class MsgBoard extends React.Component {
	constructor(props){
		super(props);
		this.addMessage = this.addMessage.bind(this);
		this.state = {
			messages: this.props.messages,
		}
	}

    handleHTTPErrors(response) {
	    console.log('Response: ');
        console.log(response);
        if (!response.ok) throw Error(response.status + ': ' + response.statusText);
        return response;
    }

    componentDidMount() {
        fetch(`${process.env.API_URL}`)
            .then(response=> this.handleHTTPErrors(response))
            .then(response=> response.json())
            .then(result=> {
                console.log('logging response from json server');
                console.log(result);
                this.setState({
                    messages: result
                });
            })
            .catch(error=> {
                console.log('Fetch API Error: ' + error);
            });
    }

    addMessage(message){
        /*let msgs = this.state.messages;

        // add id attribute
        message.id = msgs.length;

        // append to array
        msgs.push(message);

        // update state var
        this.setState({
           messages: msgs
        });*/
        // update back-end data
        fetch(`${process.env.API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        .then(response => this.handleHTTPErrors(response))
        .then(result => result.json())
        .then(result => {
            console.log('before set state' +  this.state.messages);
            this.setState({
                messages:
                    [result].concat(this.state.messages)
            });
            console.log('after set state' +  this.state.messages);
        })
        .catch(error => {
            console.log(error);
        });
	}

	render(){
	    return (
	    	<div>
                <NewMsg addMsgCallback={this.addMessage}/>
                <MsgList messages={this.state.messages}/>
			</div>
		)
	}
}

module.exports = MsgBoard;
