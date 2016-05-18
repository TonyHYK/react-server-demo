module.exports = {
	// these will be applied to every page in the site.
	middleware: [],

	// this maps URLs to modules that export a Page class.
	routes: {
		Index: {
			path: ["/"],
			page: "./pages/index",
		},
		Demo: {
			path: ["/demo"],
			page: "./pages/DemoPage",
		},
		DemoClientNav: {
			path: ["/demo2/:val"],
			page: "./pages/DemoPageClientNav",
		},
	},
};
