import {Component} from "react";

class ServerClient {
	getElements() {
		return <ChangeOnClient />;
	}
}

class ChangeOnClient extends Component {
	constructor(props) {
		super(props);
		this.state = {env: "server"};
	}

	render() {
		return <div>{this.state.env}</div>
	}

	componentDidMount() {
		this.setState({env: "client"});
	}
}

export default ServerClient;
