import {Link} from "react-server";

class ClientNav {
	getElements() {
		const request = this.getRequest();
		const {val} = request.getRouteParams();
		return <TestComp val={val} />;
	}
}

function TestComp({val}) {
	return <Link path={`/clientNav/${parseInt(val)+1}`}>Current: {val}</Link>
}

export default ClientNav;
