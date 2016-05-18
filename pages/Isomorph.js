import {Component} from "react";

export default class Isomorph extends Component {
	constructor(props) {
		super(props);
		this.state = {val: "Server!"};
	}

	render() {
		return <div>{this.state.val}</div>;
	}

	componentDidMount() {
		this.setState({val: "Client!!!!"});
	}
};
