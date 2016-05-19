import {Link} from "react-server";

class ClientTransition {
	getElements() {
		const request = this.getRequest();
		const {val} = request.getRouteParams();
		return <TestComp val={val} />;
	}
}

function TestComp({val}) {
	return <Link path={`/clientTransition/${parseInt(val)+1}`}>Current: {val}</Link>
}

export default ClientTransition;
