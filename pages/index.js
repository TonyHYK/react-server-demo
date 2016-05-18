const testPages = [
	{name: "Multiple delayed root elements", url: "/demo"},
	{name: "Client navigation", url: "/demo2/0"},
];

export default class Index {
	getElements() {
		return <div><ul>
			{testPages.map((page, i) => {
				return <li key={i}><a href={page.url}>{page.name}</a></li>
			})}
		</ul></div>
	}
}
