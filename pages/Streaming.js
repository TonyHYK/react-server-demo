import Q from "q";

class DemoPage {
	getElements() {
		return [1000,2000,3000,4000,5000].map((time) => {
			return DelayedElement(time);
		});
	}
}

function DelayedElement(time) {
	const deferred = Q.defer();
	setTimeout(() => {
		deferred.resolve(<TimedComp time={time} />);
	}, time);
	return deferred.promise;
}

function TimedComp({time}) {
	return <div>{time}</div>;
}

export default DemoPage;
