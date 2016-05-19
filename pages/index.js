const testPages = [
	{name: "Multiple delayed root elements", url: "/streaming"},
	{name: "Client navigation", url: "/clientTransition/0"},
	{name: "Component change on client", url: "/serverClient"},
];

export default class Index {
	getElements() {
		return <div>
			<h1>Welcome to react-server demo</h1>
			<ul>
				{testPages.map((page, i) => {
					return <li key={i}><a href={page.url}>{page.name}</a></li>
				})}
			</ul>
		</div>
	}

	// to make things look _somewhat_ pretty
	getLinkTags() {
		return [{
			rel: "stylesheet",
			href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
		}]
	}
}
