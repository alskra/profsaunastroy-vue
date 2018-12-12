const path = require('path');
const jsonServer = require('json-server-relationship');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
	const _send = res.send;

	res.send = function (body) {
		if (require('url').parse(req.url, true).query['singular']) {
			try {
				const json = JSON.parse(body);

				if (Array.isArray(json)) {
					if (json.length === 1) {
						return _send.call(this, JSON.stringify(json[0], null, 2));
					} else if (json.length === 0) {
						return _send.call(this, '{}', 404);
					}
				}
			} catch (e) {}
		}

		return _send.call(this, body);
	};

	next();
});

server.use(jsonServer.rewriter({
	'/home': '/pages?slug=home&singular=1',
	'/articles': '/pages?slug=articles&singular=1&_include=posts',
	'/articles/:postId': '/posts?_expand=page&page.slug=articles&id=:postId&singular=1',
}));

server.use(router);

server.listen(3000, () => {
	console.log('JSON Server is running');
});
