import {Link} from "react-server";

class DemoPage {
	getElements() {
		const request = this.getRequest();
		const {val} = request.getRouteParams();
		return <TestComp val={val} />;
	}
};

function TestComp({val}) {
	return <Link path={`/demo2/${parseInt(val)+1}`}>Current: {val}</Link>
};

export default DemoPage;
