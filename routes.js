module.exports = {
	// these will be applied to every page in the site.
	middleware: [],

	// this maps URLs to modules that export a Page class.
	routes: {
		Index: {
			path: ["/"],
			page: "./pages/index",
		},
		Streaming: {
			path: ["/streaming"],
			page: "./pages/Streaming",
		},
		ClientTransition: {
			path: ["/clientTransition/:val"],
			page: "./pages/ClientTransition",
		},
		ServerClient: {
			path: ["/serverClient"],
			page: "./pages/ServerClient",
		},
	},
};
