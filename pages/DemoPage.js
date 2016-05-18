import {DelayedElement} from "./DemoUtil";
import {Isomorph} from "./Isomorph";

class DemoPage {
	getElements() {
		/** setting up base page **/
		// return <TestComp />

		/** multiple delayed elements demo **/
		return [1000,2000,3000,4000,5000].map((time) => {
			return DelayedElement(time);
		});

		// return <Isomorph />;
	}
}

function TestComp() {
	return <div>blah</div>
};

export default DemoPage;
