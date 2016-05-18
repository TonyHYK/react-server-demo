import Q from "q";

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

export {DelayedElement};
